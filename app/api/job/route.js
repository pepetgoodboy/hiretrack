import { NextResponse } from "next/server";
import { getJobs } from "@/controllers/jobController";
import { authMiddleware } from "@/middleware/authMiddleware";

export const GET = authMiddleware(async (request) => {
  const result = await getJobs(request);

  return NextResponse.json({ message: result.message, jobs: result.jobs });
});
