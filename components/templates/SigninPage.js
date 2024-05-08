import { useEffect, useState } from "react";
import Form from "../modules/Form";
import { signupValidate } from "@/utils/validate";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

const SigninPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(signupValidate(form));
  const [isLoading, setLoading] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    setError(signupValidate(form));
  }, [form]);

  const signInHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    const data = await signIn("credentials", {
      ...form,
      redirect: false,
    });
    if (!data.error) toast.success("Login was successful");
    if (data.error) toast.error(data.error);
    setLoading(false);
  };
  return (
    <Form
      current="Sign In"
      other="Sign Up"
      changeHandler={changeHandler}
      signHandler={signInHandler}
      isLoading={isLoading}
    />
  );
};

export default SigninPage;
