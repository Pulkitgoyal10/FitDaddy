"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Settings, Leaf, Heart } from "lucide-react"

export function DietaryPreferences() {
  const [preferences, setPreferences] = useState({
    vegetarian: false,
    vegan: false,
    keto: true,
    glutenFree: false,
    dairyFree: false,
    lowCarb: true,
  })

  const togglePreference = (key: string) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }))
  }

  const dietaryOptions = [
    { key: "vegetarian", label: "Vegetarian", icon: Leaf },
    { key: "vegan", label: "Vegan", icon: Leaf },
    { key: "keto", label: "Keto", icon: Heart },
    { key: "glutenFree", label: "Gluten-Free", icon: Settings },
    { key: "dairyFree", label: "Dairy-Free", icon: Settings },
    { key: "lowCarb", label: "Low-Carb", icon: Heart },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Settings className="h-5 w-5 text-primary" />
          Dietary Preferences
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          {dietaryOptions.map((option) => {
            const Icon = option.icon
            const isActive = preferences[option.key as keyof typeof preferences]

            return (
              <div key={option.key} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <Icon className={`h-4 w-4 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="font-medium">{option.label}</span>
                </div>
                <Switch checked={isActive} onCheckedChange={() => togglePreference(option.key)} />
              </div>
            )
          })}
        </div>

        <div className="pt-2">
          <p className="text-sm text-muted-foreground mb-2">Active preferences:</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(preferences)
              .filter(([_, active]) => active)
              .map(([key, _]) => {
                const option = dietaryOptions.find((opt) => opt.key === key)
                return (
                  <Badge key={key} className="bg-primary/10 text-primary border-primary/20">
                    {option?.label}
                  </Badge>
                )
              })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
