import { NextResponse } from "next/server";

import serverAuth from "../../../../lib/serverAuth";
import prisma from "../../../../lib/prismadb";

async function handler(req: Request) {
  console.log("REQ METHOD: ", req.method);

  if (req.method !== "POST" && req.method !== "DELETE") {
    return NextResponse.json({ message: "An error occured." }, { status: 405 });
  }

  try {
    const { postId } = await req.json();

    const { currentUser } = await serverAuth();

    if (!postId || typeof postId !== "string") {
      throw new Error("Invalid ID.");
    }

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      throw new Error("Invalid ID.");
    }

    let updatedLikedIds = [...(post.likedIds || [])];

    if (req.method === "POST") {
      updatedLikedIds.push(currentUser.id);

      try {
        const post = await prisma.post.findUnique({
          where: { id: postId },
        });

        if (post?.userId) {
          await prisma.notification.create({
            data: {
              body: "Someone liked your post!",
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
    }

    if (req.method === "DELETE") {
      updatedLikedIds = updatedLikedIds.filter(
        (likedId) => likedId !== currentUser.id,
      );
    }

    const updatedPost = await prisma.post.update({
      where: {
        id: postId,
      },
      data: { likedIds: updatedLikedIds },
    });

    return NextResponse.json(updatedPost, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error has occured.", error },
      { status: 400 },
    );
  }
}

export { handler as POST, handler as DELETE };
