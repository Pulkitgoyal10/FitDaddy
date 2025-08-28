// app/api/food-scanner/route.ts

import { NextRequest, NextResponse } from "next/server"

// This prompt is carefully crafted to match the data structure
// of your FoodScanResultsProps interface.
const GEMINI_PROMPT = `
Analyze the food item in the image. Respond with ONLY a valid JSON object that matches the following TypeScript interface:

interface AnalysisResult {
  foodName: string;
  confidence: number; // A number between 0 and 100
  calories: number;
  macros: {
    protein: { amount: number; percentage: number }; // amount in grams
    carbs: { amount: number; percentage: number };
    fat: { amount: number; percentage: number };
  };
  ingredients: string[]; // List of detected main ingredients
  servingSize: string; // e.g., "1 bowl (approx 300g)"
  micronutrients: {
    fiber: string; // e.g., "8g"
    sodium: string; // e.g., "450mg"
    sugar: string; // e.g., "6g"
    cholesterol: string; // e.g., "85mg"
  };
}

Calculate the macro percentages based on their caloric contribution (Protein: 4cal/g, Carbs: 4cal/g, Fat: 9cal/g). The percentages should sum to 100.
`

export async function POST(req: NextRequest) {
  try {
    const { image } = await req.json() // Expects a base64 image string

    if (!image) {
      return NextResponse.json({ error: "Image data is required." }, { status: 400 })
    }

    const API_KEY = process.env.GEMINI_API_KEY
    if (!API_KEY) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 })
    }

    const payload = {
      contents: [
        {
          parts: [
            { text: GEMINI_PROMPT },
            {
              inlineData: {
                mimeType: "image/jpeg",
                data: image,
              },
            },
          ],
        },
      ],
    }

    // UPDATED: The model name has been changed to a current, supported version.
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Gemini API error:", errorText)
      return NextResponse.json({ error: `Gemini API request failed` }, { status: response.status })
    }

    const result = await response.json()
    
    // Defensive check for response structure
    if (!result.candidates || !result.candidates[0] || !result.candidates[0].content || !result.candidates[0].content.parts || !result.candidates[0].content.parts[0]) {
        return NextResponse.json({ error: "Invalid response structure from Gemini API." }, { status: 500 });
    }

    const textPart = result.candidates[0].content.parts[0].text

    if (!textPart) {
      return NextResponse.json({ error: "Failed to parse Gemini response." }, { status: 500 })
    }

    // Clean the response to get valid JSON
    const jsonString = textPart.replace(/```json|```/g, "").trim()
    const data = JSON.parse(jsonString)

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in food-scanner API:", error)
    return NextResponse.json({ error: "An internal server error occurred." }, { status: 500 })
  }
}
