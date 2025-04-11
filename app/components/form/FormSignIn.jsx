"use client";

import LabelAuth from "../label/LabelAuth";
import InputAuth from "../input/InputAuth";
import ButtonAuth from "../button/ButtonAuth";
import { signInAction } from "@/app/actions";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Spinner from "../spinner/Spinner";

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
    if (state.success && state.redirectTo) {
      router.push(state.redirectTo);
    }
  }, [state, router]);

  return (
    <form
      id="signInForm"
      name="signInForm"
      action={formAction}
      className="flex flex-col gap-4 lg:gap-6 2xl:gap-8"
    >
      <p aria-live="polite">{state?.message}</p>
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
