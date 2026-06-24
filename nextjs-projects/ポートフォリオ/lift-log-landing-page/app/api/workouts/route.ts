import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import next from "next";

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
    try {
        const body = await request.json()

        const { exerciseName, weight, reps, sets, rest, tag, memo } = body

        // const weightNumber = Number(weight)
        // const repsNumber = Number(reps)
        // const setsNumber = Number(sets)
        // const restNumber = rest ? Number(rest): null
// 
        // if (
            // !exerciseName ||
            // weight === "" ||
            // reps === "" ||
            // sets === "" ||
            // !Number.isFinite(weightNumber) ||
            // !N
        // )

        if (!exerciseName || !weight || !reps || !sets) {
            return NextResponse.json(
                { message: "Required fields are missing." },
                { status: 400 }
            )
        }

        const user = await getCurrentUser()

        if (!user) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 }
            )
        }

        const workout = await prisma.workoutLog.create({
            data: {
                userId: user.id,
                exerciseName,
                weight: Number(weight),
                reps: Number(reps),
                sets: Number(sets),
                rest: rest ? Number(rest) : null,
                tag: tag || null,
                memo: memo || null,
            },
        })

        return NextResponse.json(
            {
                message: "Workout created.",
                workout,
            },
            { status: 201 }
        )
    } catch (error) {
        console.error(error)

        return NextResponse.json(
            {
                message: "Failed to create workout.",
                error: String(error),
            },
            { status: 500 }
        )
    }
}

export async function GET() {
  try {
    const user = await getCurrentUser()

    if (!user) {
        return NextResponse.json(
            { message: "Unauthorized" },
            { status: 401 }
        )
    }

    const workouts = await prisma.workoutLog.findMany({
      where: {
        userId: user.id
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
    })

    return NextResponse.json({ workouts })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        message: "Failed to fetch workouts.",
        error: String(error),
      },
      { status: 500 }
    )
  }
}