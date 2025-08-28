import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Users, Calendar, Target } from "lucide-react"

export function Challenges() {
  const activeChallenges = [
    {
      title: "February Fitness Frenzy",
      description: "Complete 20 workouts this month",
      progress: 14,
      target: 20,
      participants: 1247,
      daysLeft: 8,
      reward: "500 points + Badge",
    },
    {
      title: "10K Steps Daily",
      description: "Hit 10,000 steps every day for a week",
      progress: 5,
      target: 7,
      participants: 892,
      daysLeft: 2,
      reward: "300 points",
    },
  ]

  const availableChallenges = [
    {
      title: "Strength Builder",
      description: "Complete 15 strength training sessions",
      duration: "30 days",
      participants: 456,
      reward: "750 points + Premium Badge",
    },
    {
      title: "Flexibility Focus",
      description: "Do 10 minutes of stretching daily",
      duration: "14 days",
      participants: 234,
      reward: "200 points",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Active Challenges */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Active Challenges</h2>
        <div className="space-y-4">
          {activeChallenges.map((challenge, index) => (
            <Card key={index} className="border-primary/20">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-base">{challenge.title}</CardTitle>
                    <CardDescription>{challenge.description}</CardDescription>
                  </div>
                  <Badge variant="secondary">
                    <Calendar className="h-3 w-3 mr-1" />
                    {challenge.daysLeft}d left
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span className="font-medium">
                      {challenge.progress}/{challenge.target}
                    </span>
                  </div>
                  <Progress value={(challenge.progress / challenge.target) * 100} className="h-2" />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {challenge.participants.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Trophy className="h-4 w-4" />
                      {challenge.reward}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Available Challenges */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Join New Challenges</h2>
        <div className="space-y-4">
          {availableChallenges.map((challenge, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{challenge.title}</CardTitle>
                <CardDescription>{challenge.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {challenge.duration}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {challenge.participants}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-primary font-medium">
                    <Trophy className="h-4 w-4" />
                    {challenge.reward}
                  </span>
                </div>
                <Button className="w-full">
                  <Target className="h-4 w-4 mr-2" />
                  Join Challenge
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
