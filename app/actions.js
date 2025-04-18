"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signUpAction(prevData, formData) {
  try {
    const response = await fetch("http://localhost:3000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        fullname: formData.get("fullname"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return { message: data.message };
    }

    return { success: true, redirectTo: "/signin" };
  } catch (error) {
    console.error("Error checking authentication:", error.message);
    return { success: false, message: error.message };
  }
}

export async function signInAction(prevState, formData) {
  try {
    const response = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return { message: data.message };
    }

    if (data.token) {
      const cookieStore = await cookies();
      cookieStore.set("token", data.token, {
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });
    }
    return { success: true, message: data.message, redirectTo: "/dashboard" };
  } catch (error) {
    console.error("Error checking authentication:", error.message);
    return { success: false, message: error.message };
  }
}

export async function signOutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("token");

  redirect("/signin");
}
