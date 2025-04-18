import { NextResponse } from "next/server";
import { updateJob } from "@/controllers/jobController";
import { authMiddleware } from "@/middleware/authMiddleware";

export const PATCH = authMiddleware(async (request, params) => {
  const id = params.id;

  const body = await request.json();

  const result = await updateJob(request, id, body);

  return NextResponse.json(
    { message: result.message, jobs: result.jobs },
    { status: result.status }
  );
});
