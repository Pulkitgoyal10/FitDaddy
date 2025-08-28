"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Flame, Droplets } from "lucide-react"

export function NutritionSummary() {
  const dailyGoals = {
    calories: { current: 1847, target: 2200, percentage: 84 },
    protein: { current: 85, target: 120, percentage: 71 },
    carbs: { current: 180, target: 250, percentage: 72 },
    fat: { current: 45, target: 65, percentage: 69 },
    water: { current: 6, target: 8, percentage: 75 },
  }

  return (
    <Card className="bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-accent" />
          Today's Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Calories */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-destructive" />
              <span className="font-medium">Calories</span>
            </div>
            <div className="text-right">
              <span className="font-bold">{dailyGoals.calories.current}</span>
              <span className="text-sm text-muted-foreground">/{dailyGoals.calories.target}</span>
            </div>
          </div>
          <Progress value={dailyGoals.calories.percentage} className="h-2" />
        </div>

        {/* Macros */}
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Protein</p>
              <p className="font-bold text-primary">{dailyGoals.protein.current}g</p>
              <Progress value={dailyGoals.protein.percentage} className="h-1" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Carbs</p>
              <p className="font-bold text-accent">{dailyGoals.carbs.current}g</p>
              <Progress value={dailyGoals.carbs.percentage} className="h-1" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Fat</p>
              <p className="font-bold text-chart-3">{dailyGoals.fat.current}g</p>
              <Progress value={dailyGoals.fat.percentage} className="h-1" />
            </div>
          </div>
        </div>

        {/* Water */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-blue-500" />
              <span className="font-medium">Water</span>
            </div>
            <div className="text-right">
              <span className="font-bold">{dailyGoals.water.current}</span>
              <span className="text-sm text-muted-foreground">/{dailyGoals.water.target} glasses</span>
            </div>
          </div>
          <Progress value={dailyGoals.water.percentage} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}
