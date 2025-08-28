// components/food-scanner/food-scanner-interface.tsx

"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Camera, Upload, Sparkles, ArrowLeft, Plus, Check, Edit } from "lucide-react"
import { toast } from "sonner"

//================================================================================
// FoodScanResults Component (Moved into this file to resolve import issue)
//================================================================================
interface FoodScanResultsProps {
  results: {
    foodName: string
    confidence: number
    calories: number
    macros: {
      protein: { amount: number; percentage: number }
      carbs: { amount: number; percentage: number }
      fat: { amount: number; percentage: number }
    }
    ingredients: string[]
    servingSize: string
    micronutrients: {
      fiber: string
      sodium: string
      sugar: string
      cholesterol: string
    }
  }
  onBack: () => void
}

function FoodScanResults({ results, onBack }: FoodScanResultsProps) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToLog = () => {
    setIsAdded(true)
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border px-4 py-4">
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-bold">Scan Results</h1>
            <div className="flex items-center gap-2">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                <Sparkles className="h-3 w-3 mr-1" />
                {results.confidence}% confident
              </Badge>
            </div>
          </div>
        </div>
      </header>
      <div className="px-4 py-6 space-y-6">
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{results.foodName}</CardTitle>
            <p className="text-sm text-muted-foreground">{results.servingSize}</p>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{results.calories}</div>
            <p className="text-sm text-muted-foreground">calories</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Macronutrients</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative h-4 bg-muted rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-primary"
                style={{ width: `${results.macros.protein.percentage}%` }}
              />
              <div
                className="absolute top-0 h-full bg-accent"
                style={{
                  left: `${results.macros.protein.percentage}%`,
                  width: `${results.macros.carbs.percentage}%`,
                }}
              />
              <div
                className="absolute top-0 h-full bg-chart-3"
                style={{
                  left: `${results.macros.protein.percentage + results.macros.carbs.percentage}%`,
                  width: `${results.macros.fat.percentage}%`,
                }}
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="font-medium">Protein</span>
                </div>
                <div className="text-right">
                  <span className="font-medium">{results.macros.protein.amount}g</span>
                  <span className="text-sm text-muted-foreground ml-2">{results.macros.protein.percentage}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="font-medium">Carbs</span>
                </div>
                <div className="text-right">
                  <span className="font-medium">{results.macros.carbs.amount}g</span>
                  <span className="text-sm text-muted-foreground ml-2">{results.macros.carbs.percentage}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-chart-3" />
                  <span className="font-medium">Fat</span>
                </div>
                <div className="text-right">
                  <span className="font-medium">{results.macros.fat.amount}g</span>
                  <span className="text-sm text-muted-foreground ml-2">{results.macros.fat.percentage}%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-3">
          <Button className="w-full" size="lg" onClick={handleAddToLog} disabled={isAdded}>
            {isAdded ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Added to Food Log
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-2" />
                Add to Food Log
              </>
            )}
          </Button>
          <Button variant="outline" className="w-full bg-transparent" size="lg">
            <Edit className="h-4 w-4 mr-2" />
            Edit Details
          </Button>
        </div>
      </div>
    </div>
  )
}


//================================================================================
// Main FoodScannerInterface Component
//================================================================================

// Helper function to convert file to base64
const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const base64String = (reader.result as string).split(",")[1]
      resolve(base64String)
    }
    reader.onerror = (error) => reject(error)
  })
}

export function FoodScannerInterface() {
  const [isScanning, setIsScanning] = useState(false)
  const [scanResults, setScanResults] = useState<FoodScanResultsProps['results'] | null>(null)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleAIScan = async (file: File) => {
    setIsScanning(true)
    setUploadedImage(URL.createObjectURL(file))

    try {
      const base64Image = await convertFileToBase64(file)
      const response = await fetch("/api/food-scanner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: base64Image }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to analyze image.")
      }

      const data = await response.json()
      setScanResults(data)
      toast.success(`Identified: ${data.foodName}`)

    } catch (error) {
      console.error("Analysis error:", error)
      toast.error((error as Error).message || "An unknown error occurred.")
      setUploadedImage(null)
    } finally {
      setIsScanning(false)
    }
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      handleAIScan(file)
    }
  }

  const handleCameraCapture = () => {
    fileInputRef.current?.click()
  }

  if (scanResults) {
    return (
      <FoodScanResults
        results={scanResults}
        onBack={() => {
          setScanResults(null)
          setUploadedImage(null)
        }}
      />
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border px-4 py-4">
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              AI Food Scanner
            </h1>
            <p className="text-sm text-muted-foreground">Instantly analyze your meals</p>
          </div>
        </div>
      </header>

      <div className="px-4 py-6 space-y-6">
        {!uploadedImage && !isScanning && (
          <>
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Scan Your Food</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Take a photo or upload an image to get instant nutritional analysis
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button size="lg" className="h-24 flex-col gap-2" onClick={handleCameraCapture}>
                    <Camera className="h-6 w-6" />
                    <span>Take Photo</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-24 flex-col gap-2 bg-transparent"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="h-6 w-6" />
                    <span>Upload Image</span>
                  </Button>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </CardContent>
            </Card>
          </>
        )}

        {isScanning && (
           <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="relative">
                {uploadedImage && (
                  <img
                    src={uploadedImage}
                    alt="Scanning food"
                    className="w-full h-64 object-cover rounded-lg opacity-75"
                  />
                )}
                <div className="absolute inset-0 bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto"></div>
                    <div className="space-y-2">
                      <p className="font-medium">AI is analyzing your food...</p>
                      <Progress value={66} className="w-48 mx-auto" />
                      <p className="text-sm text-muted-foreground">This may take a moment</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
