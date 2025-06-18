import { NextResponse } from "next/server";
import { parse } from "url";
import prisma from "../../../../../lib/prismadb";

export async function GET(req: Request) {
  try {
    const { pathname } = parse(req.url, true);
    const postId = pathname?.split("/").pop();

    if (!postId || typeof postId !== "string") {
      throw new Error("Invalid Id.");
    }

    const post = await prisma?.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        user: true,
        comments: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Couldn't find post.", error },
      { status: 400 },
    );
  }
}
