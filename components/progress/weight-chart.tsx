"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { TrendingDown } from "lucide-react"

const weightData = [
  { date: "Jan 1", weight: 180 },
  { date: "Jan 8", weight: 178 },
  { date: "Jan 15", weight: 176 },
  { date: "Jan 22", weight: 175 },
  { date: "Jan 29", weight: 174 },
  { date: "Feb 5", weight: 172 },
  { date: "Feb 12", weight: 172 },
]

export function WeightChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingDown className="h-5 w-5 text-primary" />
          Weight Progress
        </CardTitle>
        <CardDescription>Your weight loss journey over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ChartContainer
            config={{
              weight: {
                label: "Weight",
                color: "hsl(var(--primary))",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weightData}>
                <XAxis dataKey="date" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis
                  domain={["dataMin - 2", "dataMax + 2"]}
                  tick={{ fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
        <div className="flex justify-between items-center mt-4 pt-4 border-t">
          <div>
            <p className="text-sm text-muted-foreground">Current Weight</p>
            <p className="text-2xl font-bold">172 lbs</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Total Lost</p>
            <p className="text-2xl font-bold text-primary">-8 lbs</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
