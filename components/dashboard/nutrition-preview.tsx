"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Apple, Camera, Plus } from "lucide-react"

export function NutritionPreview() {
  const macros = [
    { name: "Protein", current: 85, target: 120, color: "bg-primary", percentage: 71 },
    { name: "Carbs", current: 180, target: 250, color: "bg-accent", percentage: 72 },
    { name: "Fat", current: 45, target: 65, color: "bg-chart-3", percentage: 69 },
  ]

  return (
    <Card className="border-accent/20">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Apple className="h-5 w-5 text-accent" />
            Nutrition Today
          </CardTitle>
          <Button variant="ghost" size="sm">
            <Camera className="h-4 w-4 mr-1" />
            Scan
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <p className="text-2xl font-bold">1,847</p>
          <p className="text-sm text-muted-foreground">of 2,200 calories</p>
          <Progress value={84} className="mt-2 h-2" />
        </div>

        <div className="space-y-3">
          {macros.map((macro) => (
            <div key={macro.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${macro.color}`} />
                <span className="font-medium">{macro.name}</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium">{macro.current}g</span>
                <span className="text-xs text-muted-foreground">/{macro.target}g</span>
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full bg-transparent">
          <Plus className="h-4 w-4 mr-2" />
          Log Meal
        </Button>
      </CardContent>
    </Card>
  )
}
