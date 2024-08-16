import { NextResponse } from "next/server";
import { prisma } from "@repo/db";

export async function POST(req: Request) {
  const data = await req.json();
  try {
    const video = await prisma.videos.create({
      data: {
        user: {
          connect: {
            id: data.userId,
          },
        },
      },
    });
    return NextResponse.json({ video, status: 200 });
  } catch (error) {
    console.error("Error creating chat:", error);
    return NextResponse.json(
      { error: "Failed to create chat" },
      { status: 500 }
    );
  }
}
