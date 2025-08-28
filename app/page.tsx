import { MobileNavigation } from "@/components/mobile-navigation"
import { WelcomeScreen } from "@/components/welcome-screen"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <WelcomeScreen />
      <MobileNavigation />
    </div>
  )
}
