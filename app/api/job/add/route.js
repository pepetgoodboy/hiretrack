import { NextResponse } from "next/server";
import { addJob } from "@/controllers/jobController";
import { authMiddleware } from "@/middleware/authMiddleware";

export const POST = authMiddleware(async (request) => {
  const body = await request.json();

  const result = await addJob(request, body);

  return NextResponse.json(
    { message: result.message },
    { status: result.status }
  );
});
