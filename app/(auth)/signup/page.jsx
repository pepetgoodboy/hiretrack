import FormSignUp from "../../components/form/FormSignUp";
import AuthLayout from "../../components/layout/AuthLayout";

export const metadata = {
  title: "Hire Track | Sign Up",
  description:
    "Create a new Hire Track account and start tracking your jobs or intern applications.",
};

export default function SignUp() {
  return (
    <AuthLayout
      title="Sign up"
      link="/signin"
      linkTitle="Sign in"
      question="Already"
    >
      <FormSignUp />
    </AuthLayout>
  );
}
