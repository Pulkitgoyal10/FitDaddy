import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2, Trophy } from "lucide-react"

export function CommunityFeed() {
  const posts = [
    {
      user: { name: "Sarah M.", avatar: "SM", level: "Level 8" },
      content: "Just crushed my first 5K run! 🏃‍♀️ Thanks to everyone for the motivation!",
      achievement: "First 5K Complete",
      likes: 24,
      comments: 8,
      timeAgo: "2h ago",
    },
    {
      user: { name: "Mike R.", avatar: "MR", level: "Level 15" },
      content: "Week 4 of my transformation journey. Down 12 lbs and feeling stronger than ever!",
      achievement: "Weight Loss Milestone",
      likes: 45,
      comments: 12,
      timeAgo: "4h ago",
    },
    {
      user: { name: "Lisa K.", avatar: "LK", level: "Level 6" },
      content: "Finally hit my goal of 10 push-ups in a row! Small wins matter! 💪",
      achievement: "Strength Goal",
      likes: 18,
      comments: 5,
      timeAgo: "6h ago",
    },
  ]

  return (
    <div className="space-y-4">
      {/* Create Post */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="h-10 w-10">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button variant="outline" className="flex-1 justify-start text-muted-foreground bg-transparent">
              Share your fitness journey...
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Feed Posts */}
      {posts.map((post, index) => (
        <Card key={index}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>{post.user.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{post.user.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {post.user.level} • {post.timeAgo}
                  </p>
                </div>
              </div>
              {post.achievement && (
                <Badge variant="secondary" className="text-xs">
                  <Trophy className="h-3 w-3 mr-1" />
                  {post.achievement}
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">{post.content}</p>

            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Heart className="h-4 w-4 mr-1" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  {post.comments}
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
