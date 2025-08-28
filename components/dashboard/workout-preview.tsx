"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dumbbell, Clock, Flame, Play } from "lucide-react"

export function WorkoutPreview() {
  return (
    <Card className="border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Dumbbell className="h-5 w-5 text-primary" />
            Today's Workout
          </CardTitle>
          <Badge className="bg-primary/10 text-primary border-primary/20">Upper Body</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            45 min
          </div>
          <div className="flex items-center gap-1">
            <Flame className="h-4 w-4" />
            ~320 cal
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="font-medium">Push-ups</span>
            <span className="text-sm text-muted-foreground">3 × 12</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="font-medium">Bench Press</span>
            <span className="text-sm text-muted-foreground">4 × 8</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="font-medium">+ 4 more exercises</span>
            <span className="text-sm text-primary">View all</span>
          </div>
        </div>

        <Button className="w-full" size="lg">
          <Play className="h-4 w-4 mr-2" />
          Start Workout
        </Button>
      </CardContent>
    </Card>
  )
}
