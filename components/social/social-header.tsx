import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Crown, Zap } from "lucide-react"

export function SocialHeader() {
  return (
    <div className="px-6 py-8 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder.svg?height=48&width=48" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl font-bold">John Doe</h1>
            <p className="text-sm text-muted-foreground">Level 12 Fitness Warrior</p>
          </div>
        </div>
        <Badge className="bg-primary/10 text-primary border-primary/20">
          <Crown className="h-3 w-3 mr-1" />
          Premium
        </Badge>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-3 bg-background/50 rounded-lg">
          <Users className="h-5 w-5 text-primary mx-auto mb-1" />
          <p className="text-lg font-bold">127</p>
          <p className="text-xs text-muted-foreground">Friends</p>
        </div>
        <div className="text-center p-3 bg-background/50 rounded-lg">
          <Zap className="h-5 w-5 text-accent mx-auto mb-1" />
          <p className="text-lg font-bold">2,840</p>
          <p className="text-xs text-muted-foreground">Points</p>
        </div>
        <div className="text-center p-3 bg-background/50 rounded-lg">
          <Crown className="h-5 w-5 text-chart-3 mx-auto mb-1" />
          <p className="text-lg font-bold">#23</p>
          <p className="text-xs text-muted-foreground">Rank</p>
        </div>
      </div>
    </div>
  )
}
