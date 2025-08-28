"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Clock, Utensils } from "lucide-react"

export function DailyMealPlan() {
  const meals = [
    {
      type: "Breakfast",
      time: "8:00 AM",
      name: "Protein Oatmeal Bowl",
      calories: 420,
      protein: 25,
      carbs: 45,
      fat: 12,
      logged: true,
      image: "/meal-breakfast.jpg",
    },
    {
      type: "Lunch",
      time: "12:30 PM",
      name: "Grilled Chicken Salad",
      calories: 380,
      protein: 35,
      carbs: 15,
      fat: 18,
      logged: true,
      image: "/meal-lunch.jpg",
    },
    {
      type: "Snack",
      time: "3:00 PM",
      name: "Greek Yogurt & Berries",
      calories: 180,
      protein: 15,
      carbs: 20,
      fat: 5,
      logged: false,
      image: "/meal-snack.jpg",
    },
    {
      type: "Dinner",
      time: "7:00 PM",
      name: "Salmon with Quinoa",
      calories: 520,
      protein: 40,
      carbs: 35,
      fat: 22,
      logged: false,
      image: "/meal-dinner.jpg",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Today's Meal Plan</h2>
        <Button variant="ghost" size="sm">
          Customize
        </Button>
      </div>

      <div className="space-y-4">
        {meals.map((meal, index) => (
          <Card key={index} className={meal.logged ? "bg-muted/30" : ""}>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <Utensils className="h-6 w-6 text-primary" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="text-xs">
                      {meal.type}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {meal.time}
                    </div>
                  </div>

                  <h3 className="font-medium mb-2">{meal.name}</h3>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{meal.calories} cal</span>
                    <span>P: {meal.protein}g</span>
                    <span>C: {meal.carbs}g</span>
                    <span>F: {meal.fat}g</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {meal.logged ? (
                    <Badge className="bg-primary/10 text-primary border-primary/20">Logged</Badge>
                  ) : (
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-1" />
                      Log
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
