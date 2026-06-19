import { NextResponse } from "next/server"
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
  console.log("DELETE API HIT")

  try {
    const { id } = await params
    console.log("delete id:", id)

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