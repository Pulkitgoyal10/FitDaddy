"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SocialHeader } from "@/components/social/social-header"
import { CommunityFeed } from "@/components/social/community-feed"
import { Leaderboard } from "@/components/social/leaderboard"
import { Challenges } from "@/components/social/challenges"
import { AICoachChat } from "@/components/social/ai-coach-chat"

export default function SocialPage() {
  const [activeTab, setActiveTab] = useState("feed")

  return (
    <div className="min-h-screen bg-background pb-20">
      <SocialHeader />

      <div className="px-6 space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="feed">Feed</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="leaderboard">Rankings</TabsTrigger>
            <TabsTrigger value="coach">AI Coach</TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-6 mt-6">
            <CommunityFeed />
          </TabsContent>

          <TabsContent value="challenges" className="space-y-6 mt-6">
            <Challenges />
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-6 mt-6">
            <Leaderboard />
          </TabsContent>

          <TabsContent value="coach" className="space-y-6 mt-6">
            <AICoachChat />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
