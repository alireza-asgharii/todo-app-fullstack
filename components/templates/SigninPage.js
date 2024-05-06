import { useEffect, useState } from "react";
import Form from "../modules/Form";
import { signupValidate } from "@/utils/validate";
import { signIn } from "next-auth/react";

const SigninPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(signupValidate(form));

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    setError(signupValidate(form));
  }, [form]);

  const signInHandler = async (e) => {
    e.preventDefault();

    const data = await signIn("credentials", {
      ...form,
      redirect: false,
    });
    console.log(data);
  };
  return (
    <Form
      current="Sign In"
      other="Sign Up"
      changeHandler={changeHandler}
      signHandler={signInHandler}
    />
  );
};

export default SigninPage;
