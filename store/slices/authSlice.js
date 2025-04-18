import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signUp: {
    fullname: "",
    email: "",
    password: "",
  },
  signIn: {
    email: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignUpField: (state, action) => {
      const { field, value } = action.payload;
      state.signUp[field] = value;
    },
    resetSignUpForm: (state) => {
      state.signUp = initialState.signUp;
    },
    setSignInField: (state, action) => {
      const { field, value } = action.payload;
      state.signIn[field] = value;
    },
    resetSignInForm: (state) => {
      state.signIn = initialState.signIn;
    },
  },
});

export const {
  setSignUpField,
  resetSignUpForm,
  setSignInField,
  resetSignInForm,
} = authSlice.actions;
export default authSlice.reducer;
