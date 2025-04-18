"use client";

import LabelAuth from "@/app/components/label/LabelAuth";
import InputAuth from "@/app/components/input/InputAuth";
import ButtonAuth from "@/app/components/button/ButtonAuth";
import { signInAction } from "@/app/actions";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/app/components/spinner/Spinner";
import { toast } from "react-toastify";

const initialState = {
  message: "",
};

export default function FormSignIn() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(
    signInAction,
    initialState
  );

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Sign in successful!", {
        theme: "dark",
        autoClose: 1000,
      });

      const timer = setTimeout(() => {
        if (state.redirectTo) {
          router.push(state.redirectTo);
        }
      }, 300);

      return () => clearTimeout(timer);
    }

    if (!state.success && state.message) {
      toast.error(state.message || "Sign in failed!", {
        theme: "dark",
        autoClose: 1000,
      });
    }
  }, [state, router]);

  return (
    <form
      id="signInForm"
      name="signInForm"
      action={formAction}
      className="flex flex-col gap-4 lg:gap-6 2xl:gap-8"
    >
      <div className="flex flex-col gap-2">
        <LabelAuth htmlFor="email" text="Email" />
        <InputAuth
          id="email"
          name="email"
          type="email"
          placeholder="example@email.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <LabelAuth htmlFor="password" text="Password" />
        <InputAuth
          id="password"
          name="password"
          type="password"
          placeholder="At least 8 characters"
        />
        <p></p>
      </div>
      <ButtonAuth disabled={pending} text={pending ? <Spinner /> : "Sign In"} />
    </form>
  );
}
