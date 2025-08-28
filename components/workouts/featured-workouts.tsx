"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Flame, Users, Play, Star } from "lucide-react"

export function FeaturedWorkouts() {
  const workouts = [
    {
      id: "upper-body-blast",
      title: "Upper Body Blast",
      description: "Build strength in your chest, shoulders, and arms",
      duration: "45 min",
      calories: "320 cal",
      difficulty: "Intermediate",
      rating: 4.8,
      participants: 1247,
      thumbnail: "/workout-upper-body.png",
      isNew: true,
    },
    {
      id: "hiit-cardio",
      title: "HIIT Cardio Burn",
      description: "High-intensity interval training for maximum fat burn",
      duration: "30 min",
      calories: "280 cal",
      difficulty: "Advanced",
      rating: 4.9,
      participants: 892,
      thumbnail: "/workout-hiit.png",
      isPopular: true,
    },
    {
      id: "core-crusher",
      title: "Core Crusher",
      description: "Strengthen your core with targeted exercises",
      duration: "25 min",
      calories: "180 cal",
      difficulty: "Beginner",
      rating: 4.7,
      participants: 2156,
      thumbnail: "/workout-core.png",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Featured Workouts</h2>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {workouts.map((workout) => (
          <Card key={workout.id} className="overflow-hidden">
            <div className="relative">
              <div className="h-32 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
                <Play className="h-12 w-12 text-primary bg-background/90 rounded-full p-3" />
              </div>
              <div className="absolute top-2 left-2 flex gap-2">
                {workout.isNew && <Badge className="bg-accent text-accent-foreground">New</Badge>}
                {workout.isPopular && <Badge className="bg-destructive text-destructive-foreground">Popular</Badge>}
              </div>
              <div className="absolute top-2 right-2">
                <Badge className="bg-background/90 text-foreground border">{workout.difficulty}</Badge>
              </div>
            </div>

            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{workout.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{workout.description}</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0 space-y-3">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {workout.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Flame className="h-4 w-4" />
                  {workout.calories}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-current text-yellow-500" />
                  {workout.rating}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {workout.participants.toLocaleString()}
                </div>
              </div>

              <Button className="w-full" size="lg">
                <Play className="h-4 w-4 mr-2" />
                Start Workout
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
