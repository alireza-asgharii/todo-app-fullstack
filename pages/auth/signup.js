import SignupPage from "@/components/templates/SignupPage";
import useAccesslevel from "@/hooks/useAccesslevel";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Signup = () => {
  const { status } = useAccesslevel();

  if (status === "loading") return <h4>Loading</h4>;
  return <SignupPage />;
};

export default Signup;
