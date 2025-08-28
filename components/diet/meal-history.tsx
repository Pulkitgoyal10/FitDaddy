"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { History, RotateCcw } from "lucide-react"

export function MealHistory() {
  const recentMeals = [
    {
      name: "Protein Smoothie",
      time: "Yesterday, 9:00 AM",
      calories: 280,
      type: "Breakfast",
    },
    {
      name: "Turkey Sandwich",
      time: "Yesterday, 1:00 PM",
      calories: 420,
      type: "Lunch",
    },
    {
      name: "Grilled Steak",
      time: "2 days ago, 7:30 PM",
      calories: 480,
      type: "Dinner",
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <History className="h-5 w-5 text-primary" />
            Recent Meals
          </CardTitle>
          <Button variant="ghost" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {recentMeals.map((meal, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium">{meal.name}</p>
                <Badge variant="secondary" className="text-xs">
                  {meal.type}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{meal.time}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">{meal.calories} cal</p>
              <Button variant="ghost" size="sm">
                <RotateCcw className="h-4 w-4 mr-1" />
                Add Again
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
