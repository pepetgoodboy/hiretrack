import { NextResponse } from "next/server";
import { getAllUsers } from "@/controllers/userController";
import { adminMiddleware } from "@/middleware/authMiddleware";

export const GET = adminMiddleware(async () => {
  const result = await getAllUsers();

  return NextResponse.json({ message: result.message, users: result.users });
});
