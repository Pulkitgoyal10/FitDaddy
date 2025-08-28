import { WorkoutHeader } from "@/components/workouts/workout-header"
import { WorkoutCategories } from "@/components/workouts/workout-categories"
import { FeaturedWorkouts } from "@/components/workouts/featured-workouts"
import { RecentWorkouts } from "@/components/workouts/recent-workouts"
import { MobileNavigation } from "@/components/mobile-navigation"

export default function WorkoutsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <WorkoutHeader />

      <div className="px-4 space-y-6">
        <WorkoutCategories />
        <FeaturedWorkouts />
        <RecentWorkouts />
      </div>

      <MobileNavigation />
    </div>
  )
}
