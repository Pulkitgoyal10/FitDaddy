"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, Check, Edit, Sparkles } from "lucide-react"

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

export function FoodScanResults({ results, onBack }: FoodScanResultsProps) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToLog = () => {
    setIsAdded(true)
    // In a real app, this would save to the user's food log
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
        {/* Food Identification */}
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

        {/* Macronutrients Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Macronutrients</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Visual Macro Breakdown */}
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

            {/* Macro Details */}
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

        {/* Micronutrients */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Additional Nutrients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(results.micronutrients).map(([key, value]) => (
                <div key={key} className="text-center p-3 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground capitalize">{key}</p>
                  <p className="font-medium">{value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Ingredients */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Detected Ingredients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {results.ingredients.map((ingredient, index) => (
                <Badge key={index} variant="secondary">
                  {ingredient}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
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
