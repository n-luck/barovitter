import { NextResponse } from "next/server";

import serverAuth from "../../../../lib/serverAuth";
import prisma from "../../../../lib/prismadb";

async function handler(req: Request) {
  if (req.method !== "POST" && req.method !== "DELETE") {
    return NextResponse.json(
      { message: "An error has occured." },
      { status: 405 },
    );
  }

  try {
    const { userId } = await req.json();

    const { currentUser } = await serverAuth();

    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid ID.");
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error("Invalid ID");
    }

    const updateFollowingIds = [...(user.followingIds || [])];

    if (req.method === "POST") {
      updateFollowingIds.push(userId);

      try {
        await prisma.notification.create({
          data: {
            body: "Someone followed you!",
            userId,
          },
        });

        await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            hasNotification: true,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }

    if (req.method === "DELETE") {
      updateFollowingIds.filter((followingId) => followingId !== userId);
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        followingIds: updateFollowingIds,
      },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error has occured: ", error },
      { status: 400 },
    );
  }
}

export { handler as POST, handler as DELETE };
