import { NextResponse } from "next/server";

import serverAuth from "../../../../lib/serverAuth";
import prisma from "../../../../lib/prismadb";

async function handler(req: Request) {
  if (req.method !== "POST" && req.method !== "GET") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 400 });
  }

  try {
    if (req.method === "POST") {
      const { currentUser } = await serverAuth();
      const { body } = await req.json();

      if (!body) {
        return NextResponse.json(
          { message: "Body cannot be empty" },
          { status: 400 },
        );
      }

      const post = await prisma.post.create({
        data: {
          body,
          userId: currentUser.id,
        },
      });

      return NextResponse.json(post, { status: 200 });
    }

    if (req.method === "GET") {
      const { searchParams } = new URL(req.url);
      const userId = searchParams.get("userId");

      let posts;

      if (userId && typeof userId === "string") {
        posts = await prisma.post.findMany({
          where: {
            userId,
          },
          include: {
            user: true,
            comments: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        });
      } else {
        posts = await prisma.post.findMany({
          include: {
            user: true,
            comments: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        });
      }
      return NextResponse.json(posts, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "An error has occured.", error },
      { status: 400 },
    );
  }
}

export { handler as GET, handler as POST };
