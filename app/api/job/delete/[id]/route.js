import { NextResponse } from "next/server";
import { deleteJob } from "@/controllers/jobController";
import { authMiddleware } from "@/middleware/authMiddleware";

export const DELETE = authMiddleware(async (request, params) => {
  const id = params.id;

  const result = await deleteJob(request, id);

  return NextResponse.json(
    { message: result.message },
    { status: result.status }
  );
});
