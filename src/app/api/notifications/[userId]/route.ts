import { NextResponse } from "next/server";

import prisma from "../../../../../lib/prismadb";
import serverAuth from "../../../../../lib/serverAuth";

export async function GET() {
  try {
    const { currentUser } = await serverAuth();
    const userId = currentUser.id;

    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid ID.");
    }

    const notifications = await prisma.notification.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        hasNotification: false,
      },
    });

    return NextResponse.json(notifications, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Unauthorized" }, { status: 400 });
  }
}
