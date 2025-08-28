"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Scale, Activity, TrendingUp } from "lucide-react"

export function HealthMetrics() {
  const metrics = [
    {
      icon: Scale,
      label: "BMI",
      value: "22.4",
      status: "Normal",
      statusColor: "bg-primary/10 text-primary border-primary/20",
      change: "-0.2",
      trend: "down",
    },
    {
      icon: Heart,
      label: "Resting HR",
      value: "68",
      unit: "bpm",
      status: "Good",
      statusColor: "bg-accent/10 text-accent border-accent/20",
      change: "-2",
      trend: "down",
    },
    {
      icon: Activity,
      label: "Body Fat",
      value: "15.2",
      unit: "%",
      status: "Athletic",
      statusColor: "bg-chart-3/10 text-chart-3 border-chart-3/20",
      change: "-0.5",
      trend: "down",
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Health Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {metrics.map((metric) => {
            const Icon = metric.icon
            return (
              <div key={metric.label} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-background rounded-lg">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{metric.label}</p>
                    <Badge className={metric.statusColor}>{metric.status}</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">
                    {metric.value}
                    {metric.unit && <span className="text-sm text-muted-foreground ml-1">{metric.unit}</span>}
                  </p>
                  <p className="text-xs text-primary">{metric.change} this week</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
