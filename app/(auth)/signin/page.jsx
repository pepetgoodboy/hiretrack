import FormSignIn from "../../components/form/FormSignIn";
import AuthLayout from "../../components/layout/AuthLayout";

export const metadata = {
  title: "Hire Track | Sign In",
  description:
    "Sign in to your Hire Track account and continue tracking your jobs or intern applications.",
};

export default function SignIn() {
  return (
    <AuthLayout
      title="Sign in"
      link="/signup"
      linkTitle="Sign up"
      question="Don't"
    >
      <FormSignIn />
    </AuthLayout>
  );
}
