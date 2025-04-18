import { NextResponse } from "next/server";
import { loginUser } from "@/controllers/userController";

export async function POST(request) {
  const body = await request.json();
  const result = await loginUser(body);

  if ("error" in result) {
    return NextResponse.json(
      { message: result.message },
      { status: result.status }
    );
  }

  return NextResponse.json(
    {
      message: result.message,
      token: result.token,
    },
    {
      status: result.status,
    }
  );
}
