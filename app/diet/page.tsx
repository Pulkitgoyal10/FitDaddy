import { DietHeader } from "@/components/diet/diet-header"
import { DailyMealPlan } from "@/components/diet/daily-meal-plan"
import { NutritionSummary } from "@/components/diet/nutrition-summary"
import { MealHistory } from "@/components/diet/meal-history"
import { DietaryPreferences } from "@/components/diet/dietary-preferences"
import { MobileNavigation } from "@/components/mobile-navigation"

export default function DietPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <DietHeader />

      <div className="px-4 space-y-6">
        <NutritionSummary />
        <DailyMealPlan />
        <DietaryPreferences />
        <MealHistory />
      </div>

      <MobileNavigation />
    </div>
  )
}
