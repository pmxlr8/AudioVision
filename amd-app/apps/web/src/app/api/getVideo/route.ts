import { prisma } from "@repo/db";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request) {
  const data = await req.json();
  try {
    const video = prisma.videos.findUnique({
      where: {
        id: data.id,
      },
    });

    return NextResponse.json({ video, status: 200 });
  } catch (error) {
    console.error("Error getting video:", error);
    return NextResponse.json({ error: "Failed to get video" }, { status: 500 });
  }
}
