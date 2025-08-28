import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Flame, Target, Zap } from "lucide-react"

export function AchievementBadges() {
  const achievements = [
    { icon: Trophy, name: "First Week", description: "Completed first week", earned: true, color: "text-yellow-500" },
    { icon: Flame, name: "Hot Streak", description: "7 day workout streak", earned: true, color: "text-orange-500" },
    { icon: Target, name: "Goal Crusher", description: "Hit weekly goal", earned: true, color: "text-primary" },
    { icon: Star, name: "All Star", description: "Perfect week", earned: false, color: "text-muted-foreground" },
    {
      icon: Zap,
      name: "Power User",
      description: "10 intense workouts",
      earned: false,
      color: "text-muted-foreground",
    },
    { icon: Award, name: "Dedication", description: "30 day streak", earned: false, color: "text-muted-foreground" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          Achievement Badges
        </CardTitle>
        <CardDescription>Unlock badges as you reach new milestones</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div key={index} className="text-center space-y-2">
                <div
                  className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                    achievement.earned ? "bg-primary/10" : "bg-muted/50"
                  }`}
                >
                  <Icon className={`h-8 w-8 ${achievement.earned ? achievement.color : "text-muted-foreground"}`} />
                </div>
                <div>
                  <p className={`text-sm font-medium ${achievement.earned ? "" : "text-muted-foreground"}`}>
                    {achievement.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </div>
                {achievement.earned && (
                  <Badge variant="secondary" className="text-xs">
                    Earned
                  </Badge>
                )}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
