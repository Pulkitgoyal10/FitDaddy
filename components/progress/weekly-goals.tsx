import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Target, CheckCircle } from "lucide-react"

export function WeeklyGoals() {
  const goals = [
    { name: "Workout 4 times", current: 3, target: 4, completed: false },
    { name: "Lose 1 lb", current: 0.8, target: 1, completed: false },
    { name: "10,000 steps daily", current: 6, target: 7, completed: false },
    { name: "Drink 8 glasses water", current: 7, target: 7, completed: true },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          Weekly Goals
        </CardTitle>
        <CardDescription>Stay on track with your weekly targets</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium flex items-center gap-2">
                {goal.completed && <CheckCircle className="h-4 w-4 text-primary" />}
                {goal.name}
              </span>
              <span className="text-sm text-muted-foreground">
                {goal.current}/{goal.target}
              </span>
            </div>
            <Progress value={(goal.current / goal.target) * 100} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
