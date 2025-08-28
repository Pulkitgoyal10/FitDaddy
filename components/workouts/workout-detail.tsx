"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Play, Clock, Flame, Target, AlertTriangle, RefreshCw, CheckCircle, Info } from "lucide-react"

interface WorkoutDetailProps {
  workoutId: string
}

export function WorkoutDetail({ workoutId }: WorkoutDetailProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState("intermediate")

  // Mock workout data - in real app this would come from API
  const workout = {
    id: workoutId,
    title: "Upper Body Blast",
    description: "Build strength in your chest, shoulders, and arms with this comprehensive upper body workout.",
    duration: "45 min",
    calories: "320 cal",
    difficulty: "Intermediate",
    equipment: ["Dumbbells", "Bench", "Pull-up Bar"],
    targetMuscles: ["Chest", "Shoulders", "Triceps", "Back"],
    exercises: [
      {
        id: 1,
        name: "Push-ups",
        sets: 3,
        reps: "12-15",
        restTime: "60s",
        instructions: "Keep your body straight and lower until chest nearly touches ground.",
        videoThumbnail: "/exercise-pushups.png",
        alternatives: ["Knee Push-ups", "Incline Push-ups"],
        targetMuscles: ["Chest", "Triceps", "Shoulders"],
      },
      {
        id: 2,
        name: "Dumbbell Bench Press",
        sets: 4,
        reps: "8-10",
        restTime: "90s",
        instructions: "Lower dumbbells to chest level, then press up explosively.",
        videoThumbnail: "/exercise-bench-press.png",
        alternatives: ["Floor Press", "Push-ups"],
        targetMuscles: ["Chest", "Triceps", "Shoulders"],
      },
      {
        id: 3,
        name: "Shoulder Press",
        sets: 3,
        reps: "10-12",
        restTime: "75s",
        instructions: "Press dumbbells overhead while keeping core engaged.",
        videoThumbnail: "/exercise-shoulder-press.png",
        alternatives: ["Pike Push-ups", "Resistance Band Press"],
        targetMuscles: ["Shoulders", "Triceps"],
      },
      {
        id: 4,
        name: "Pull-ups",
        sets: 3,
        reps: "6-8",
        restTime: "90s",
        instructions: "Pull your body up until chin clears the bar.",
        videoThumbnail: "/exercise-pullups.png",
        alternatives: ["Assisted Pull-ups", "Lat Pulldowns", "Resistance Band Rows"],
        targetMuscles: ["Back", "Biceps"],
      },
      {
        id: 5,
        name: "Tricep Dips",
        sets: 3,
        reps: "10-12",
        restTime: "60s",
        instructions: "Lower your body by bending elbows, then push back up.",
        videoThumbnail: "/exercise-tricep-dips.png",
        alternatives: ["Bench Dips", "Chair Dips"],
        targetMuscles: ["Triceps", "Shoulders"],
      },
    ],
  }

  const difficultyLevels = [
    { value: "beginner", label: "Beginner", description: "Reduced sets and reps" },
    { value: "intermediate", label: "Intermediate", description: "Standard workout" },
    { value: "advanced", label: "Advanced", description: "Increased intensity" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-4">
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-bold">{workout.title}</h1>
            <p className="text-sm text-muted-foreground">{workout.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {workout.duration}
          </div>
          <div className="flex items-center gap-1">
            <Flame className="h-4 w-4" />
            {workout.calories}
          </div>
          <div className="flex items-center gap-1">
            <Target className="h-4 w-4" />
            {workout.exercises.length} exercises
          </div>
        </div>

        <Button className="w-full" size="lg">
          <Play className="h-4 w-4 mr-2" />
          Start Workout
        </Button>
      </header>

      <div className="px-4 py-6 space-y-6">
        {/* Difficulty Selection */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Choose Your Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {difficultyLevels.map((level) => (
                <div
                  key={level.value}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedDifficulty === level.value
                      ? "border-primary bg-primary/5"
                      : "border-border hover:bg-muted/50"
                  }`}
                  onClick={() => setSelectedDifficulty(level.value)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{level.label}</p>
                      <p className="text-sm text-muted-foreground">{level.description}</p>
                    </div>
                    {selectedDifficulty === level.value && <CheckCircle className="h-5 w-5 text-primary" />}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Workout Details */}
        <Tabs defaultValue="exercises" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="exercises">Exercises</TabsTrigger>
            <TabsTrigger value="equipment">Equipment</TabsTrigger>
            <TabsTrigger value="muscles">Muscles</TabsTrigger>
          </TabsList>

          <TabsContent value="exercises" className="space-y-4">
            {workout.exercises.map((exercise, index) => (
              <ExerciseCard key={exercise.id} exercise={exercise} index={index} />
            ))}
          </TabsContent>

          <TabsContent value="equipment" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Required Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {workout.equipment.map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="muscles" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Target Muscle Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {workout.targetMuscles.map((muscle) => (
                    <Badge key={muscle} className="justify-center py-2 bg-primary/10 text-primary border-primary/20">
                      {muscle}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function ExerciseCard({ exercise, index }: { exercise: any; index: number }) {
  const [showAlternatives, setShowAlternatives] = useState(false)

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Badge className="bg-primary/10 text-primary border-primary/20">{index + 1}</Badge>
            <div>
              <CardTitle className="text-lg">{exercise.name}</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <span>{exercise.sets} sets</span>
                <span>•</span>
                <span>{exercise.reps} reps</span>
                <span>•</span>
                <span>{exercise.restTime} rest</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Video Thumbnail */}
        <div className="relative h-32 bg-gradient-to-r from-muted to-muted/50 rounded-lg flex items-center justify-center">
          <Play className="h-8 w-8 text-primary bg-background/90 rounded-full p-2" />
          <Badge className="absolute top-2 right-2 bg-background/90 text-foreground">Demo</Badge>
        </div>

        {/* Instructions */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Info className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium text-sm">Instructions</span>
          </div>
          <p className="text-sm text-muted-foreground">{exercise.instructions}</p>
        </div>

        {/* Target Muscles */}
        <div className="space-y-2">
          <span className="font-medium text-sm">Target Muscles</span>
          <div className="flex flex-wrap gap-2">
            {exercise.targetMuscles.map((muscle: string) => (
              <Badge key={muscle} variant="secondary" className="text-xs">
                {muscle}
              </Badge>
            ))}
          </div>
        </div>

        {/* Alternatives */}
        <div className="space-y-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-auto p-0 text-sm"
            onClick={() => setShowAlternatives(!showAlternatives)}
          >
            <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
            Can't do this exercise? View alternatives
          </Button>

          {showAlternatives && (
            <div className="space-y-2 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <p className="text-sm font-medium text-amber-800 dark:text-amber-200">Alternative exercises:</p>
              <div className="space-y-1">
                {exercise.alternatives.map((alt: string) => (
                  <div key={alt} className="flex items-center gap-2">
                    <RefreshCw className="h-3 w-3 text-amber-600" />
                    <span className="text-sm text-amber-700 dark:text-amber-300">{alt}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
