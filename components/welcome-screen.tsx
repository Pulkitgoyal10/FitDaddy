"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Sparkles, Target, TrendingUp, Users, ChevronLeft, ChevronRight } from "lucide-react"

export function WelcomeScreen() {
  const [showOnboarding, setShowOnboarding] = useState(false)

  if (showOnboarding) {
    return <OnboardingFlow />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 pb-20">
      {/* Hero Section */}
      <div className="px-6 pt-12 pb-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1">
            <Sparkles className="h-4 w-4 mr-2" />
            AI-Powered Fitness
          </Badge>
        </div>
        <h1 className="text-4xl font-bold text-balance mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          FitDaddy AI
        </h1>
        <p className="text-lg text-muted-foreground text-balance mb-8 max-w-sm mx-auto">
          Your personal fitness and wellness coach powered by artificial intelligence
        </p>

        <Button size="lg" className="w-full max-w-xs mx-auto mb-6" onClick={() => setShowOnboarding(true)}>
          Get Started
        </Button>
      </div>

      {/* Features Grid */}
      <div className="px-6 space-y-4">
        <h2 className="text-xl font-semibold mb-4">What you'll get:</h2>

        <div className="grid gap-4">
          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Personalized Plans</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                AI-generated workout and nutrition plans tailored to your goals, preferences, and lifestyle.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-accent/20">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
                <CardTitle className="text-lg">Smart Tracking</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Advanced progress monitoring with AI-powered food scanning and comprehensive analytics.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-chart-3/20">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-chart-3/10 rounded-lg">
                  <Users className="h-5 w-5 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Community Support</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Connect with like-minded fitness enthusiasts, share progress, and stay motivated together.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Basic Info
    age: "",
    height: "",
    weight: "",
    gender: "",
    // Fitness Goals
    primaryGoal: "",
    activityLevel: "",
    workoutDays: "",
    // Dietary Preferences
    dietaryRestrictions: [] as string[],
    mealsPerDay: "",
    // Health Conditions
    healthConditions: [] as string[],
    injuries: [] as string[],
  })

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Complete onboarding
      console.log("Onboarding completed:", formData)
      // Navigate to dashboard
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleArrayItem = (field: string, item: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].includes(item)
        ? (prev[field as keyof typeof prev] as string[]).filter((i) => i !== item)
        : [...(prev[field as keyof typeof prev] as string[]), item],
    }))
  }

  return (
    <div className="min-h-screen bg-background px-6 py-8 pb-20">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" size="sm" onClick={handleBack} disabled={currentStep === 1}>
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back
          </Button>
          <Badge variant="secondary">
            Step {currentStep} of {totalSteps}
          </Badge>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2 text-center">{Math.round(progress)}% complete</p>
        </div>

        {/* Step Content */}
        <Card>
          {currentStep === 1 && (
            <>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Tell us about yourself to get personalized recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="25"
                      value={formData.age}
                      onChange={(e) => updateFormData("age", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (lbs)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="150"
                      value={formData.weight}
                      onChange={(e) => updateFormData("weight", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="height">Height (ft&apos;in&quot;)</Label>
                  <Input
                    id="height"
                    placeholder="5'8&quot;"
                    value={formData.height}
                    onChange={(e) => updateFormData("height", e.target.value)}
                  />
                </div>

                <div className="space-y-3">
                  <Label>Gender</Label>
                  <RadioGroup value={formData.gender} onValueChange={(value) => updateFormData("gender", value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </>
          )}

          {currentStep === 2 && (
            <>
              <CardHeader>
                <CardTitle>Fitness Goals</CardTitle>
                <CardDescription>What do you want to achieve with FitDaddy AI?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Primary Goal</Label>
                  <RadioGroup
                    value={formData.primaryGoal}
                    onValueChange={(value) => updateFormData("primaryGoal", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="lose-weight" id="lose-weight" />
                      <Label htmlFor="lose-weight">Lose Weight</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="gain-muscle" id="gain-muscle" />
                      <Label htmlFor="gain-muscle">Build Muscle</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="maintain" id="maintain" />
                      <Label htmlFor="maintain">Maintain Current Weight</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="general-fitness" id="general-fitness" />
                      <Label htmlFor="general-fitness">General Fitness</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label>Current Activity Level</Label>
                  <RadioGroup
                    value={formData.activityLevel}
                    onValueChange={(value) => updateFormData("activityLevel", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sedentary" id="sedentary" />
                      <Label htmlFor="sedentary">Sedentary (little to no exercise)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="lightly-active" id="lightly-active" />
                      <Label htmlFor="lightly-active">Lightly Active (1-3 days/week)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="moderately-active" id="moderately-active" />
                      <Label htmlFor="moderately-active">Moderately Active (3-5 days/week)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="very-active" id="very-active" />
                      <Label htmlFor="very-active">Very Active (6-7 days/week)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workout-days">How many days per week do you want to work out?</Label>
                  <Input
                    id="workout-days"
                    type="number"
                    min="1"
                    max="7"
                    placeholder="3"
                    value={formData.workoutDays}
                    onChange={(e) => updateFormData("workoutDays", e.target.value)}
                  />
                </div>
              </CardContent>
            </>
          )}

          {currentStep === 3 && (
            <>
              <CardHeader>
                <CardTitle>Dietary Preferences</CardTitle>
                <CardDescription>Help us create the perfect meal plan for you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Dietary Restrictions (select all that apply)</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Vegetarian",
                      "Vegan",
                      "Keto",
                      "Paleo",
                      "Gluten-Free",
                      "Dairy-Free",
                      "Low-Carb",
                      "Mediterranean",
                    ].map((diet) => (
                      <div key={diet} className="flex items-center space-x-2">
                        <Checkbox
                          id={diet}
                          checked={formData.dietaryRestrictions.includes(diet)}
                          onCheckedChange={() => toggleArrayItem("dietaryRestrictions", diet)}
                        />
                        <Label htmlFor={diet} className="text-sm">
                          {diet}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Preferred Meals Per Day</Label>
                  <RadioGroup
                    value={formData.mealsPerDay}
                    onValueChange={(value) => updateFormData("mealsPerDay", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3" id="three-meals" />
                      <Label htmlFor="three-meals">3 meals (breakfast, lunch, dinner)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="4" id="four-meals" />
                      <Label htmlFor="four-meals">4 meals (+ 1 snack)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5" id="five-meals" />
                      <Label htmlFor="five-meals">5 meals (+ 2 snacks)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="6" id="six-meals" />
                      <Label htmlFor="six-meals">6 small meals</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </>
          )}

          {currentStep === 4 && (
            <>
              <CardHeader>
                <CardTitle>Health & Safety</CardTitle>
                <CardDescription>Help us keep you safe and customize your experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Do you have any health conditions? (select all that apply)</Label>
                  <div className="space-y-2">
                    {[
                      "Diabetes",
                      "High Blood Pressure",
                      "Heart Disease",
                      "Asthma",
                      "Arthritis",
                      "Back Problems",
                      "None",
                    ].map((condition) => (
                      <div key={condition} className="flex items-center space-x-2">
                        <Checkbox
                          id={condition}
                          checked={formData.healthConditions.includes(condition)}
                          onCheckedChange={() => toggleArrayItem("healthConditions", condition)}
                        />
                        <Label htmlFor={condition} className="text-sm">
                          {condition}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Any current injuries or areas to avoid? (select all that apply)</Label>
                  <div className="space-y-2">
                    {["Knee", "Back", "Shoulder", "Wrist", "Ankle", "Neck", "Hip", "None"].map((injury) => (
                      <div key={injury} className="flex items-center space-x-2">
                        <Checkbox
                          id={injury}
                          checked={formData.injuries.includes(injury)}
                          onCheckedChange={() => toggleArrayItem("injuries", injury)}
                        />
                        <Label htmlFor={injury} className="text-sm">
                          {injury}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Disclaimer:</strong> FitDaddy AI provides general fitness and nutrition guidance. Always
                    consult with healthcare professionals before starting any new exercise or diet program.
                  </p>
                </div>
              </CardContent>
            </>
          )}
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={handleBack} disabled={currentStep === 1}>
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          <Button onClick={handleNext}>
            {currentStep === totalSteps ? "Complete Setup" : "Next"}
            {currentStep < totalSteps && <ChevronRight className="h-4 w-4 ml-1" />}
          </Button>
        </div>
      </div>
    </div>
  )
}
