import { NextResponse } from "next/server";

import serverAuth from "../../../../lib/serverAuth";
import prisma from "../../../../lib/prismadb";

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { name, username, bio, profileImage, coverImage } = body;
    const { currentUser } = await serverAuth();

    if (!name || !username) {
      throw new Error("Missing fields");
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        name,
        username,
        bio,
        profileImage,
        coverImage,
      },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Unauthorized" }, { status: 400 });
  }
}
