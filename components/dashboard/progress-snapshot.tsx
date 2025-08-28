"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Award, Target, Calendar } from "lucide-react"

export function ProgressSnapshot() {
  const achievements = [
    { icon: Award, label: "Week Streak", value: "7 days", color: "text-primary" },
    { icon: Target, label: "Goals Hit", value: "14/21", color: "text-accent" },
    { icon: Calendar, label: "Workouts", value: "5 this week", color: "text-chart-3" },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Progress Snapshot
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <div key={achievement.label} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Icon className={`h-5 w-5 ${achievement.color}`} />
                </div>
                <p className={`text-lg font-bold ${achievement.color}`}>{achievement.value}</p>
                <p className="text-xs text-muted-foreground">{achievement.label}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-muted/30 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">This Week's Highlights</span>
            <Badge className="bg-primary/10 text-primary border-primary/20">New PR!</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            You've increased your bench press by 10 lbs and maintained a perfect workout streak. Keep it up!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
