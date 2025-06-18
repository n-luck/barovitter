import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismadb";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error fetching users." },
      { status: 400 },
    );
  }
}
