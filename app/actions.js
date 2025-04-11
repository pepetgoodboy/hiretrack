"use server";
import { cookies } from "next/headers";

export async function signUpAction(formData) {
  const fullname = formData.get("fullname");
  const email = formData.get("email");
  const password = formData.get("password");

  console.log(
    "Test Value" + "\nFullname: ",
    fullname,
    "\nEmail: ",
    email,
    "\nPassword: ",
    password
  );
}

export async function signInAction(prevState, formData) {
  try {
    const response = await fetch(
      "https://tasty-nora-pepetgoodboy-59bb6fbc.koyeb.app/api/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      }
    );

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
    return { success: true, redirectTo: "/dashboard" };
  } catch (error) {
    console.error("Error checking authentication:", error);
    return { success: false, message: "Login Error" };
  }
}
