import { TrendingUp, Flame, Target } from "lucide-react"

export function ProgressHeader() {
  return (
    <div className="px-6 py-8 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Your Progress</h1>
        <p className="text-muted-foreground">Track your fitness journey and celebrate achievements</p>

        <div className="flex justify-center gap-4 mt-6">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <p className="text-2xl font-bold">-8</p>
            <p className="text-xs text-muted-foreground">lbs lost</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-2">
              <Flame className="h-6 w-6 text-accent" />
            </div>
            <p className="text-2xl font-bold">23</p>
            <p className="text-xs text-muted-foreground">day streak</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-chart-3/10 rounded-full mb-2">
              <Target className="h-6 w-6 text-chart-3" />
            </div>
            <p className="text-2xl font-bold">32</p>
            <p className="text-xs text-muted-foreground">workouts</p>
          </div>
        </div>
      </div>
    </div>
  )
}
