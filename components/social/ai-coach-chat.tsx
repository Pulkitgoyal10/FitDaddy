"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bot, Send, Sparkles, Target, Zap, Heart } from "lucide-react"

export function AICoachChat() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content:
        "Hi John! I'm your AI fitness coach. I've analyzed your recent progress and I'm impressed with your consistency! How are you feeling about your current workout routine?",
      timestamp: "2 min ago",
    },
    {
      type: "user",
      content: "I'm feeling good but I think I need more cardio in my routine",
      timestamp: "1 min ago",
    },
    {
      type: "ai",
      content:
        "Great insight! Based on your goals and current fitness level, I recommend adding 2-3 cardio sessions per week. Would you prefer HIIT workouts or steady-state cardio like running?",
      timestamp: "Just now",
    },
  ])

  const quickActions = [
    { icon: Target, label: "Adjust Goals", action: "Help me adjust my fitness goals" },
    { icon: Zap, label: "Workout Tips", action: "Give me workout form tips" },
    { icon: Heart, label: "Nutrition Advice", action: "I need nutrition guidance" },
  ]

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          type: "user",
          content: message,
          timestamp: "Just now",
        },
      ])
      setMessage("")

      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "ai",
            content: "I understand your concern. Let me analyze your data and provide personalized recommendations...",
            timestamp: "Just now",
          },
        ])
      }, 1000)
    }
  }

  return (
    <div className="space-y-6">
      {/* AI Coach Info */}
      <Card className="border-primary/20">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-full">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-base">FitDaddy AI Coach</CardTitle>
              <CardDescription>Your personal fitness and nutrition advisor</CardDescription>
            </div>
            <Badge className="ml-auto bg-primary/10 text-primary border-primary/20">
              <Sparkles className="h-3 w-3 mr-1" />
              Active
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-3">
        {quickActions.map((action, index) => {
          const Icon = action.icon
          return (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-3 flex flex-col items-center gap-2 bg-transparent"
              onClick={() => setMessage(action.action)}
            >
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-xs">{action.label}</span>
            </Button>
          )
        })}
      </div>

      {/* Chat Messages */}
      <Card>
        <CardContent className="p-0">
          <div className="max-h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex gap-3 ${msg.type === "user" ? "flex-row-reverse" : ""}`}>
                <Avatar className="h-8 w-8">
                  {msg.type === "ai" ? (
                    <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  ) : (
                    <AvatarFallback className="text-xs">JD</AvatarFallback>
                  )}
                </Avatar>
                <div className={`flex-1 max-w-[80%] ${msg.type === "user" ? "text-right" : ""}`}>
                  <div
                    className={`p-3 rounded-lg text-sm ${
                      msg.type === "user" ? "bg-primary text-primary-foreground ml-auto" : "bg-muted"
                    }`}
                  >
                    {msg.content}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{msg.timestamp}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Ask your AI coach anything..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button size="sm" onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
