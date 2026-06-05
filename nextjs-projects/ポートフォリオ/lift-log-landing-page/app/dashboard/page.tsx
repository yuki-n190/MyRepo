"use client"

import { useState } from "react"
import Link from "next/link"
import { LogOut, Dumbbell, ChevronRight, Flame, Target, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const motivationalQuotes = [
  "The only bad workout is the one that didn't happen.",
  "Pain is temporary. Pride is forever.",
  "You don't have to be great to start, but you have to start to be great.",
  "The iron never lies. Two hundred pounds is always two hundred pounds.",
]

const recentWorkouts = [
  { name: "Bench Press", weight: "185 lbs", sets: "4x8", date: "Today" },
  { name: "Deadlift", weight: "315 lbs", sets: "3x5", date: "Yesterday" },
  { name: "Squat", weight: "275 lbs", sets: "5x5", date: "2 days ago" },
]

export default function DashboardPage() {
  const [exercise, setExercise] = useState("")
  const [weight, setWeight] = useState("")
  const [reps, setReps] = useState("")
  const [sets, setSets] = useState("")
  const [tag, setTag] = useState("")
  const [memo, setMemo] = useState("")

  const todayQuote = motivationalQuotes[0]

  return (
    <main className="min-h-screen pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="font-display text-xl tracking-wider">
            LIFTLOG
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/workouts"
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              My Workouts
            </Link>
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-7xl px-6 pt-8">
        {/* Welcome Section */}
        <section className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Welcome back</p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight">
            TIME TO WORK.
          </h1>
        </section>

        {/* Cards Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Quote & AI Coach */}
          <div className="space-y-6 lg:col-span-1">
            {/* Motivational Quote Card */}
            <div className="bg-card border border-border p-6">
              <div className="flex items-center gap-2 mb-4">
                <Flame className="h-4 w-4 text-muted-foreground" />
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Daily Fuel</p>
              </div>
              <blockquote className="font-display text-2xl md:text-3xl leading-tight tracking-tight">
                &quot;{todayQuote}&quot;
              </blockquote>
            </div>

            {/* AI Coach Card */}
            <div className="bg-card border border-border p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-4 w-4 text-muted-foreground" />
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">AI Coach</p>
              </div>
              <p className="text-lg leading-relaxed text-foreground">
                Great consistency this week. Your bench press is up 5% from last month. 
                Consider adding an extra rest day before your next heavy deadlift session.
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                Based on your last 30 days
              </p>
            </div>

            {/* Progress Summary Card */}
            <div className="bg-card border border-border p-6">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">This Week</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <span className="font-display text-3xl md:text-4xl">5</span>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Workouts</p>
                </div>
                <div className="text-center">
                  <span className="font-display text-3xl md:text-4xl">12</span>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Day Streak</p>
                </div>
                <div className="text-center">
                  <span className="font-display text-3xl md:text-4xl">8.2K</span>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Lbs Moved</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Quick Log */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border p-6 h-full">
              <div className="flex items-center gap-2 mb-6">
                <Dumbbell className="h-4 w-4 text-muted-foreground" />
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Log Workout</p>
              </div>

              <form className="space-y-5">
                <div className="space-y-2">
                  <Label
                    htmlFor="exercise"
                    className="text-xs uppercase tracking-widest text-muted-foreground"
                  >
                    Exercise
                  </Label>
                  <Input
                    id="exercise"
                    type="text"
                    placeholder="Bench Press"
                    value={exercise}
                    onChange={(e) => setExercise(e.target.value)}
                    className="h-14 bg-input border-border text-base px-4 placeholder:text-muted-foreground/50"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-2">
                    <Label
                      htmlFor="weight"
                      className="text-xs uppercase tracking-widest text-muted-foreground"
                    >
                      Weight
                    </Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="185"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="h-14 bg-input border-border text-base px-4 placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="reps"
                      className="text-xs uppercase tracking-widest text-muted-foreground"
                    >
                      Reps
                    </Label>
                    <Input
                      id="reps"
                      type="number"
                      placeholder="8"
                      value={reps}
                      onChange={(e) => setReps(e.target.value)}
                      className="h-14 bg-input border-border text-base px-4 placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="sets"
                      className="text-xs uppercase tracking-widest text-muted-foreground"
                    >
                      Sets
                    </Label>
                    <Input
                      id="sets"
                      type="number"
                      placeholder="4"
                      value={sets}
                      onChange={(e) => setSets(e.target.value)}
                      className="h-14 bg-input border-border text-base px-4 placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="tag"
                    className="text-xs uppercase tracking-widest text-muted-foreground"
                  >
                    Tag
                  </Label>
                  <Select value={tag} onValueChange={setTag}>
                    <SelectTrigger className="h-14 bg-input border-border text-base px-4">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="chest">Chest</SelectItem>
                      <SelectItem value="back">Back</SelectItem>
                      <SelectItem value="legs">Legs</SelectItem>
                      <SelectItem value="shoulders">Shoulders</SelectItem>
                      <SelectItem value="arms">Arms</SelectItem>
                      <SelectItem value="core">Core</SelectItem>
                      <SelectItem value="cardio">Cardio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="memo"
                    className="text-xs uppercase tracking-widest text-muted-foreground"
                  >
                    Notes
                  </Label>
                  <Textarea
                    id="memo"
                    placeholder="How did it feel?"
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                    className="min-h-[80px] bg-input border-border text-base px-4 py-3 placeholder:text-muted-foreground/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-16 text-sm uppercase tracking-widest font-medium"
                >
                  Save Workout
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column - Recent Workouts */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Recent Workouts</p>
                <Link
                  href="/workouts"
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  View All
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="space-y-4">
                {recentWorkouts.map((workout, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-4 border-b border-border last:border-0"
                  >
                    <div>
                      <h3 className="font-display text-xl tracking-tight">{workout.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {workout.weight} · {workout.sets}
                      </p>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {workout.date}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quick Stats Below Workouts */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Personal Records</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Bench Press</span>
                    <span className="font-display text-lg">225 LBS</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Squat</span>
                    <span className="font-display text-lg">315 LBS</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Deadlift</span>
                    <span className="font-display text-lg">365 LBS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
