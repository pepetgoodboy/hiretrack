import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getServerSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    return null;
  }

  try {
    const response = await fetch(
      "https://tasty-nora-pepetgoodboy-59bb6fbc.koyeb.app/api/user/check-auth",
      {
        headers: {
          Cookie: `token=${token.value}`,
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Error checking authentication:", error);
    return null;
  }
}

export async function requireAuth() {
  const session = await getServerSession();

  if (!session) {
    redirect("/signin");
  }

  return session;
}
