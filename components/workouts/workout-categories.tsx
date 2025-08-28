"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dumbbell, Heart, Zap, Target, Timer, Flame } from "lucide-react"

export function WorkoutCategories() {
  const categories = [
    {
      icon: Dumbbell,
      name: "Strength",
      count: 12,
      color: "bg-primary/10 text-primary border-primary/20",
      iconColor: "text-primary",
    },
    {
      icon: Heart,
      name: "Cardio",
      count: 8,
      color: "bg-destructive/10 text-destructive border-destructive/20",
      iconColor: "text-destructive",
    },
    {
      icon: Zap,
      name: "HIIT",
      count: 6,
      color: "bg-accent/10 text-accent border-accent/20",
      iconColor: "text-accent",
    },
    {
      icon: Target,
      name: "Core",
      count: 10,
      color: "bg-chart-3/10 text-chart-3 border-chart-3/20",
      iconColor: "text-chart-3",
    },
    {
      icon: Timer,
      name: "Quick",
      count: 15,
      color: "bg-chart-4/10 text-chart-4 border-chart-4/20",
      iconColor: "text-chart-4",
    },
    {
      icon: Flame,
      name: "Fat Burn",
      count: 7,
      color: "bg-chart-5/10 text-chart-5 border-chart-5/20",
      iconColor: "text-chart-5",
    },
  ]

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Categories</h2>
      <div className="grid grid-cols-3 gap-3">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Card key={category.name} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center space-y-2">
                <div className="flex items-center justify-center">
                  <Icon className={`h-6 w-6 ${category.iconColor}`} />
                </div>
                <div>
                  <p className="font-medium text-sm">{category.name}</p>
                  <Badge className={`${category.color} text-xs`}>{category.count}</Badge>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
