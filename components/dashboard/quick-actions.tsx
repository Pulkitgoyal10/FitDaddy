"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, MessageCircle, Users, Dumbbell } from "lucide-react"

export function QuickActions() {
  const actions = [
    { icon: Camera, label: "Scan Food", color: "bg-primary hover:bg-primary/90" },
    { icon: Dumbbell, label: "Quick Workout", color: "bg-accent hover:bg-accent/90" },
    { icon: MessageCircle, label: "AI Coach", color: "bg-chart-3 hover:bg-chart-3/90" },
    { icon: Users, label: "Friends", color: "bg-chart-4 hover:bg-chart-4/90" },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => {
            const Icon = action.icon
            return (
              <Button key={action.label} variant="default" className={`h-16 flex-col gap-2 ${action.color} text-white`}>
                <Icon className="h-5 w-5" />
                <span className="text-sm">{action.label}</span>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
