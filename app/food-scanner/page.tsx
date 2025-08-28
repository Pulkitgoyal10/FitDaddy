import { FoodScannerInterface } from "@/components/food-scanner/food-scanner-interface"
import { MobileNavigation } from "@/components/mobile-navigation"

export default function FoodScannerPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <FoodScannerInterface />
      <MobileNavigation />
    </div>
  )
}
