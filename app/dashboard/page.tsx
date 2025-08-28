import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DailySummary } from "@/components/dashboard/daily-summary"
import { HealthMetrics } from "@/components/dashboard/health-metrics"
import { WorkoutPreview } from "@/components/dashboard/workout-preview"
import { NutritionPreview } from "@/components/dashboard/nutrition-preview"
import { ProgressSnapshot } from "@/components/dashboard/progress-snapshot"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { MobileNavigation } from "@/components/mobile-navigation"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <DashboardHeader />

      <div className="px-4 space-y-6">
        <DailySummary />
        <HealthMetrics />

        <div className="grid gap-4">
          <WorkoutPreview />
          <NutritionPreview />
        </div>

        <ProgressSnapshot />
        <QuickActions />
      </div>

      <MobileNavigation />
    </div>
  )
}
