import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Plus } from "lucide-react"

export function ProgressPhotos() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Camera className="h-5 w-5 text-primary" />
          Progress Photos
        </CardTitle>
        <CardDescription>Visual tracking of your transformation</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="aspect-[3/4] bg-muted/50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Jan 1 - Start</p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="aspect-[3/4] bg-muted/50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Feb 12 - Current</p>
              </div>
            </div>
          </div>
        </div>
        <Button variant="outline" className="w-full bg-transparent">
          <Plus className="h-4 w-4 mr-2" />
          Add Progress Photo
        </Button>
      </CardContent>
    </Card>
  )
}
