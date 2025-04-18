import { NextResponse } from "next/server";
import { deleteUser } from "@/controllers/userController";
import { adminMiddleware } from "@/middleware/authMiddleware";

export const DELETE = adminMiddleware(async (request, params) => {
  const id = params.id;

  const result = await deleteUser(id);

  return NextResponse.json(
    { message: result.message },
    { status: result.status }
  );
});
