"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Settings, Flame } from "lucide-react"

export function DashboardHeader() {
  const [notifications] = useState(3)

  return (
    <header className="bg-card border-b border-border px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/fitness-user-avatar.png" />
            <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-lg font-semibold">Good morning, John!</h1>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                <Flame className="h-3 w-3 mr-1" />7 day streak
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            {notifications > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-destructive">{notifications}</Badge>
            )}
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
