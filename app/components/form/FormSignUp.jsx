"use client";

import LabelAuth from "../label/LabelAuth";
import InputAuth from "../input/InputAuth";
import ButtonAuth from "../button/ButtonAuth";
import { signUpAction } from "../../../app/actions";
// import { useDispatch, useSelector } from "react-redux";
// import { setSignUpField, resetSignUpForm } from "../../store/slices/authSlice";

export default function FormSignUp() {
  // const dispatch = useDispatch();
  // const { fullname, email, password } = useSelector(
  //   (state) => state.auth.signUp
  // );

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;

  //   switch (name) {
  //     case "fullname":
  //       dispatch(setSignUpField({ field: "fullname", value }));
  //       break;
  //     case "email":
  //       dispatch(setSignUpField({ field: "email", value }));
  //       break;
  //     case "password":
  //       dispatch(setSignUpField({ field: "password", value }));
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(
  //     "Test Value" + "\nFullname: ",
  //     fullname + "\nEmail: ",
  //     email + "\nPassword: ",
  //     password
  //   );
  //   dispatch(resetSignUpForm());
  // };

  return (
    <form
      id="signUpForm"
      name="signUpForm"
      action={signUpAction}
      // onSubmit={handleSubmit}
      className="flex flex-col gap-4 lg:gap-6 2xl:gap-8"
    >
      <div className="flex flex-col gap-2">
        <LabelAuth htmlFor="fullname" text="Name" />
        <InputAuth
          id="fullname"
          name="fullname"
          type="text"
          placeholder="John Doe"
          // value={fullname}
          // onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <LabelAuth htmlFor="email" text="Email" />
        <InputAuth
          id="email"
          name="email"
          type="text"
          placeholder="example@email.com"
          // value={email}
          // onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <LabelAuth htmlFor="password" text="Password" />
        <InputAuth
          id="password"
          name="password"
          type="password"
          placeholder="At least 8 characters"
          // value={password}
          // onChange={handleInputChange}
        />
      </div>
      <ButtonAuth text="Sign up" />
    </form>
  );
}
