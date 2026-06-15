    "use client"

    import { useState } from "react"
    import Link from "next/link"
    import { ArrowLeft, Search, Dumbbell } from "lucide-react"
    import { Input } from "@/components/ui/input"
    import { Badge } from "@/components/ui/badge"

    type Workout = {
    id: number
    name: string
    weight: string
    sets: number
    reps: number
    date: string
    volume: string
    tag: string
    }

    // Static sample data - no backend yet
    const sampleWorkouts: Workout[] = [
    { id: 1, name: "Bench Press", weight: "185 lbs", sets: 4, reps: 8, date: "Mar 18, 2025", volume: "5,920 lbs", tag: "Chest" },
    { id: 2, name: "Deadlift", weight: "315 lbs", sets: 3, reps: 5, date: "Mar 17, 2025", volume: "4,725 lbs", tag: "Back" },
    { id: 3, name: "Back Squat", weight: "275 lbs", sets: 5, reps: 5, date: "Mar 16, 2025", volume: "6,875 lbs", tag: "Legs" },
    { id: 4, name: "Overhead Press", weight: "115 lbs", sets: 4, reps: 6, date: "Mar 15, 2025", volume: "2,760 lbs", tag: "Shoulders" },
    { id: 5, name: "Barbell Row", weight: "155 lbs", sets: 4, reps: 10, date: "Mar 14, 2025", volume: "6,200 lbs", tag: "Back" },
    { id: 6, name: "Incline Dumbbell Press", weight: "70 lbs", sets: 3, reps: 10, date: "Mar 13, 2025", volume: "4,200 lbs", tag: "Chest" },
    { id: 7, name: "Romanian Deadlift", weight: "225 lbs", sets: 4, reps: 8, date: "Mar 12, 2025", volume: "7,200 lbs", tag: "Legs" },
    { id: 8, name: "Pull Up", weight: "Bodyweight", sets: 4, reps: 12, date: "Mar 11, 2025", volume: "—", tag: "Back" },
    ]

    const tags = ["All", "Chest", "Back", "Legs", "Shoulders", "Arms", "Core"]

    export default function WorkoutsPage() {
    const [search, setSearch] = useState("")
    const [activeTag, setActiveTag] = useState("All")

    // Simple client-side filtering on the static data
    const filteredWorkouts = sampleWorkouts.filter((workout) => {
        const matchesSearch = workout.name.toLowerCase().includes(search.toLowerCase())
        const matchesTag = activeTag === "All" || workout.tag === activeTag
        return matchesSearch && matchesTag
    })

    return (
        <main className="min-h-screen pb-24">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
            <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
            <Link href="/" className="font-display text-xl tracking-wider">
                LIFTLOG
            </Link>
            <Link
                href="/dashboard"
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="h-4 w-4" />
                Dashboard
            </Link>
            </nav>
        </header>

        <div className="mx-auto max-w-5xl px-6 pt-12">
            {/* Page Title */}
            <section className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Your History</p>
            <h1 className="font-display text-5xl md:text-6xl tracking-tight">MY WORKOUTS</h1>
            <p className="mt-3 text-lg text-muted-foreground">Review every set, rep, and lift.</p>
            </section>

            {/* Search */}
            <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
                type="text"
                placeholder="Search exercise name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-14 bg-input border-border text-base pl-12 pr-4 placeholder:text-muted-foreground/50"
            />
            </div>

            {/* Tag Filters */}
            <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
                <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`h-10 px-5 text-xs uppercase tracking-widest border transition-colors ${
                    activeTag === tag
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground"
                }`}
                >
                {tag}
                </button>
            ))}
            </div>

            {/* Workout List */}
            {filteredWorkouts.length > 0 ? (
            <div className="space-y-4">
                {filteredWorkouts.map((workout) => (
                <Link
                    key={workout.id}
                    href={`/workouts/${workout.id}`}
                    className="group block bg-card border border-border p-6 transition-colors hover:border-foreground"
                >
                    <div className="flex items-start justify-between gap-4">
                    {/* Left: Name + Stats */}
                    <div className="min-w-0">
                        <div className="flex items-center gap-3 mb-3">
                        <h2 className="font-display text-2xl md:text-3xl tracking-tight truncate">
                            {workout.name}
                        </h2>
                        <Badge variant="secondary" className="uppercase tracking-widest text-[10px] shrink-0">
                            {workout.tag}
                        </Badge>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                        <span>
                            <span className="text-foreground font-medium">{workout.weight}</span> weight
                        </span>
                        <span>
                            <span className="text-foreground font-medium">
                            {workout.sets}x{workout.reps}
                            </span>{" "}
                            sets/reps
                        </span>
                        <span>
                            <span className="text-foreground font-medium">{workout.volume}</span> volume
                        </span>
                        </div>
                    </div>

                    {/* Right: Date */}
                    <span className="text-xs uppercase tracking-widest text-muted-foreground whitespace-nowrap shrink-0">
                        {workout.date}
                    </span>
                    </div>
                </Link>
                ))}
            </div>
            ) : (
            // Empty state when filters return nothing
            <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-border">
                <Dumbbell className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="font-display text-2xl tracking-tight mb-2">NO WORKOUTS FOUND</p>
                <p className="text-sm text-muted-foreground">Try a different search or filter.</p>
            </div>
            )}
        </div>
        </main>
    )
    }
