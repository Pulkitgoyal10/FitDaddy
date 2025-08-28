import { WorkoutDetail } from "@/components/workouts/workout-detail"
import { MobileNavigation } from "@/components/mobile-navigation"

export default function WorkoutDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background pb-20">
      <WorkoutDetail workoutId={params.id} />
      <MobileNavigation />
    </div>
  )
}
