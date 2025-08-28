"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Home, Dumbbell, Camera, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const navigationItems = [
  { icon: Home, label: "Home", href: "/dashboard" },
  { icon: Dumbbell, label: "Workouts", href: "/workouts" },
  { icon: Camera, label: "Scan", href: "/food-scanner", highlight: true },
  { icon: TrendingUp, label: "Progress", href: "/progress" },
  { icon: Users, label: "Social", href: "/social" },
]

export function MobileNavigation() {
  const router = useRouter()
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState("/dashboard")

  useEffect(() => {
    // Update active tab based on current pathname
    const currentItem = navigationItems.find((item) => pathname.startsWith(item.href))
    if (currentItem) {
      setActiveTab(currentItem.href)
    }
  }, [pathname])

  const handleNavigation = (href: string) => {
    setActiveTab(href)
    if (href === "/dashboard") {
      router.push("/dashboard")
    } else if (href === "/workouts") {
      router.push("/workouts")
    } else if (href === "/food-scanner") {
      router.push("/food-scanner")
    } else if (href === "/progress") {
      router.push("/progress")
    } else if (href === "/social") {
      router.push("/social")
    }
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-2 z-50">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.href

          return (
            <Button
              key={item.href}
              variant={isActive ? "default" : "ghost"}
              size="sm"
              className={`flex flex-col items-center gap-1 h-auto py-2 px-3 relative ${
                item.highlight ? "bg-primary hover:bg-primary/90 text-primary-foreground" : ""
              }`}
              onClick={() => handleNavigation(item.href)}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
              {item.highlight && <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-accent">AI</Badge>}
            </Button>
          )
        })}
      </div>
    </nav>
  )
}
