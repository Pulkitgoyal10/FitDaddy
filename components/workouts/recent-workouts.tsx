"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, RotateCcw, CheckCircle } from "lucide-react"

export function RecentWorkouts() {
  const recentWorkouts = [
    {
      id: "push-day",
      title: "Push Day - Chest & Triceps",
      completedAt: "2 days ago",
      duration: "42 min",
      status: "completed",
    },
    {
      id: "leg-day",
      title: "Leg Day - Quads & Glutes",
      completedAt: "4 days ago",
      duration: "38 min",
      status: "completed",
    },
    {
      id: "cardio-session",
      title: "Morning Cardio",
      completedAt: "1 week ago",
      duration: "25 min",
      status: "completed",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recent Workouts</h2>
        <Button variant="ghost" size="sm">
          View History
        </Button>
      </div>

      <div className="space-y-3">
        {recentWorkouts.map((workout) => (
          <Card key={workout.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{workout.title}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {workout.duration}
                      <span>•</span>
                      <span>{workout.completedAt}</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <RotateCcw className="h-4 w-4 mr-1" />
                  Repeat
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
