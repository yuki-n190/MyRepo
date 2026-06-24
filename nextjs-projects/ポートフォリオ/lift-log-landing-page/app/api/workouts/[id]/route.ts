import { NextResponse } from "next/server"

import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export const dynamic = "force-dynamic"

type Params = {
  params: Promise<{
    id: string
  }>
}

export async function DELETE(
  request: Request,
  { params }: Params
) {
  try {
    const { id } = await params

    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      )
    }

    const existingWorkout = await prisma.workoutLog.findFirst({
      where: {
        id,
        userId: user.id,
      },
    })

    if (!existingWorkout) {
      return NextResponse.json(
        { message: "Workout not found." },
        { status: 404 }
      )
    }

    await prisma.workoutLog.delete({
      where: {
        id,
      },
    })

    return NextResponse.json({
      message: "Workout deleted.",
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        message: "Failed to delete workout.",
        error: String(error),
      },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: Request,
  { params }: Params
) {
  try {
    const { id } = await params
    const body = await request.json()

    const { exerciseName, weight, reps, sets, rest, tag, memo } = body
    
    if ( !exerciseName || !weight || !reps || !sets ) {
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

    const existingWorkout = await prisma.workoutLog.findFirst({
      where: {
        id,
        userId: user.id,
      },
    })

    if (!existingWorkout) {
      return NextResponse.json(
        { message: "Workout not found." },
        { status: 404 }
      )
    }

    const workout = await prisma.workoutLog.update({
      where: {
        id,
      },
      data: {
        exerciseName,
        weight: Number(weight),
        reps: Number(reps),
        sets: Number(sets),
        rest: rest ? Number(rest) : null,
        tag: tag || null,
        memo: memo || null,
      },
    })

    return NextResponse.json({
      message: "Workout updated.",
      workout,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        message: "Failed to update workout.",
        error: String(error),
      },
      { status: 500 }
    )
  }
}