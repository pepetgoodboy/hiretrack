import { NextResponse } from "next/server";
import { registerUser } from "@/controllers/userController";

export async function POST(request) {
  const body = await request.json();
  const result = await registerUser(body);

  if ("error" in result) {
    return NextResponse.json(
      { message: result.message },
      { status: result.status }
    );
  }

  return NextResponse.json(
    { message: result.message },
    { status: result.status }
  );
}
