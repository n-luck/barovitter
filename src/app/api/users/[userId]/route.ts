import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prismadb";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ userId: string }> },
) {
  try {
    const { userId } = await params;

    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid ID.");
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    const followersCount = await prisma.user.count({
      where: {
        followingIds: {
          has: userId,
        },
      },
    });

    return NextResponse.json(
      { ...existingUser, followersCount },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error fetching user." },
      { status: 400 },
    );
  }
}
