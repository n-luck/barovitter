import { NextResponse } from "next/server";
import serverAuth from "../../../../lib/serverAuth";

export async function GET() {
  try {
    const { currentUser } = await serverAuth();
    return NextResponse.json(currentUser, { status: 200 });
  } catch (error) {
    console.error("Error fetching current user:", error);
    return NextResponse.json({ message: "Unauthorized" }, { status: 400 });
  }
}
