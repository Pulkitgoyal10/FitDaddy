import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Zap, Clock, Flame } from "lucide-react"

export function WorkoutStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          Workout Statistics
        </CardTitle>
        <CardDescription>Your fitness performance this month</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">24.5</p>
            <p className="text-sm text-muted-foreground">Avg Duration (hrs)</p>
          </div>
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <Flame className="h-8 w-8 text-accent mx-auto mb-2" />
            <p className="text-2xl font-bold">2,840</p>
            <p className="text-sm text-muted-foreground">Calories Burned</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Strength Training</span>
              <span className="font-medium">12 sessions</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Cardio</span>
              <span className="font-medium">8 sessions</span>
            </div>
            <Progress value={50} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Flexibility</span>
              <span className="font-medium">6 sessions</span>
            </div>
            <Progress value={40} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
