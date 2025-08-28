"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Trophy, Target, Calendar, Plus } from "lucide-react"
import { ProgressHeader } from "@/components/progress/progress-header"
import { WeightChart } from "@/components/progress/weight-chart"
import { WorkoutStats } from "@/components/progress/workout-stats"
import { AchievementBadges } from "@/components/progress/achievement-badges"
import { ProgressPhotos } from "@/components/progress/progress-photos"
import { WeeklyGoals } from "@/components/progress/weekly-goals"

export default function ProgressPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background pb-20">
      <ProgressHeader />

      <div className="px-6 space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="body">Body</TabsTrigger>
            <TabsTrigger value="workouts">Workouts</TabsTrigger>
            <TabsTrigger value="achievements">Awards</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            <WeeklyGoals />
            <WeightChart />
            <WorkoutStats />
            <AchievementBadges />
          </TabsContent>

          <TabsContent value="body" className="space-y-6 mt-6">
            <WeightChart />
            <ProgressPhotos />

            {/* Body Measurements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Body Measurements
                </CardTitle>
                <CardDescription>Track your body composition changes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Chest</span>
                      <span className="font-medium">42"</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    <p className="text-xs text-muted-foreground">+2" from start</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Waist</span>
                      <span className="font-medium">32"</span>
                    </div>
                    <Progress value={65} className="h-2" />
                    <p className="text-xs text-muted-foreground">-3" from start</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Arms</span>
                      <span className="font-medium">15"</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <p className="text-xs text-muted-foreground">+1.5" from start</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Thighs</span>
                      <span className="font-medium">24"</span>
                    </div>
                    <Progress value={80} className="h-2" />
                    <p className="text-xs text-muted-foreground">+2" from start</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Measurement
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workouts" className="space-y-6 mt-6">
            <WorkoutStats />

            {/* Workout History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Recent Workouts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Upper Body Strength", date: "Today", duration: "45 min", calories: 320 },
                  { name: "HIIT Cardio", date: "Yesterday", duration: "30 min", calories: 280 },
                  { name: "Lower Body Power", date: "2 days ago", duration: "50 min", calories: 380 },
                  { name: "Core & Flexibility", date: "3 days ago", duration: "25 min", calories: 150 },
                ].map((workout, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">{workout.name}</p>
                      <p className="text-sm text-muted-foreground">{workout.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{workout.duration}</p>
                      <p className="text-xs text-muted-foreground">{workout.calories} cal</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6 mt-6">
            <AchievementBadges />

            {/* Milestones */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Milestones
                </CardTitle>
                <CardDescription>Major achievements on your fitness journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: "First Week Complete",
                    description: "Completed your first week of workouts",
                    achieved: true,
                    date: "Jan 15",
                  },
                  {
                    title: "10 Workouts Done",
                    description: "Completed 10 total workouts",
                    achieved: true,
                    date: "Jan 28",
                  },
                  { title: "5 lbs Lost", description: "Lost your first 5 pounds", achieved: true, date: "Feb 5" },
                  {
                    title: "30 Day Streak",
                    description: "30 consecutive days of activity",
                    achieved: false,
                    progress: 23,
                  },
                  { title: "50 Workouts", description: "Complete 50 total workouts", achieved: false, progress: 32 },
                ].map((milestone, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className={`p-2 rounded-full ${milestone.achieved ? "bg-primary/10" : "bg-muted"}`}>
                      <Trophy className={`h-5 w-5 ${milestone.achieved ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{milestone.title}</p>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      {!milestone.achieved && milestone.progress && (
                        <div className="mt-2">
                          <Progress value={(milestone.progress / 50) * 100} className="h-2" />
                          <p className="text-xs text-muted-foreground mt-1">{milestone.progress}/50</p>
                        </div>
                      )}
                    </div>
                    {milestone.achieved && (
                      <Badge variant="secondary" className="text-xs">
                        {milestone.date}
                      </Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
