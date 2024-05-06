import SigninPage from "@/components/templates/SigninPage";
import useAccesslevel from "@/hooks/useAccesslevel";
import React from "react";

const Signin = () => {
  const { status } = useAccesslevel();

  if (status === "loading") return <h4>Loading...</h4>;
  return <SigninPage />;
};

export default Signin;
