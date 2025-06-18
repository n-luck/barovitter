import { NextResponse } from "next/server";

import serverAuth from "../../../../lib/serverAuth";
import prisma from "../../../../lib/prismadb";

export async function POST(req: Request) {
  try {
    const { body } = await req.json();
    const postId = new URL(req.url).searchParams.get("postId");
    const { currentUser } = await serverAuth();

    if (!postId || typeof postId !== "string") {
      throw new Error("Invalid ID.");
    }

    const comment = await prisma.comment.create({
      data: {
        body,
        userId: currentUser.id,
        postId,
      },
    });

    try {
      const post = await prisma.post.findUnique({
        where: { id: postId },
      });

      if (post?.userId) {
        await prisma.notification.create({
          data: {
            body: "Someone commented on your post!",
            userId: post.userId,
          },
        });

        await prisma.user.update({
          where: {
            id: post.userId,
          },
          data: {
            hasNotification: true,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }

    return NextResponse.json(comment, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error has occured.", error },
      { status: 400 },
    );
  }
}
