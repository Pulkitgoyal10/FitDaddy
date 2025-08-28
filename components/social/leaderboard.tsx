import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Crown, Trophy, Medal, Zap } from "lucide-react"

export function Leaderboard() {
  const leaderboard = [
    { rank: 1, name: "Alex Chen", points: 4250, level: 18, streak: 45, avatar: "AC" },
    { rank: 2, name: "Maria Garcia", points: 3890, level: 16, streak: 32, avatar: "MG" },
    { rank: 3, name: "David Kim", points: 3650, level: 15, streak: 28, avatar: "DK" },
    { rank: 4, name: "Emma Wilson", points: 3420, level: 14, streak: 25, avatar: "EW" },
    { rank: 5, name: "James Brown", points: 3180, level: 13, streak: 22, avatar: "JB" },
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Trophy className="h-5 w-5 text-gray-400" />
      case 3:
        return <Medal className="h-5 w-5 text-amber-600" />
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>
    }
  }

  return (
    <div className="space-y-6">
      {/* Your Rank */}
      <Card className="border-primary/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Your Ranking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                <span className="text-lg font-bold text-primary">#23</span>
              </div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-muted-foreground">Level 12</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold">2,840</p>
              <p className="text-sm text-muted-foreground">points</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Rankings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            Top Performers
          </CardTitle>
          <CardDescription>This month's fitness leaders</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {leaderboard.map((user, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10">{getRankIcon(user.rank)}</div>
                <Avatar className="h-10 w-10">
                  <AvatarFallback>{user.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{user.name}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      Level {user.level}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      {user.streak} day streak
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">{user.points.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">points</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
