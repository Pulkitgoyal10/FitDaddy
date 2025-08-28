"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Calendar, Target, Zap } from "lucide-react"

export function DailySummary() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  return (
    <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            {today}
          </CardTitle>
          <Badge className="bg-primary/10 text-primary border-primary/20">Day 7</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Target className="h-4 w-4 text-primary mr-1" />
            </div>
            <p className="text-2xl font-bold text-primary">2/3</p>
            <p className="text-xs text-muted-foreground">Goals Hit</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Zap className="h-4 w-4 text-accent mr-1" />
            </div>
            <p className="text-2xl font-bold text-accent">1,847</p>
            <p className="text-xs text-muted-foreground">Calories</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-chart-3">45</p>
            <p className="text-xs text-muted-foreground">Active Min</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Daily Progress</span>
            <span className="text-primary font-medium">67%</span>
          </div>
          <Progress value={67} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}
