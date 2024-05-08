import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { signupValidate } from "@/utils/validate";
import { useSignUp } from "@/hooks/useAuth";
import toast from "react-hot-toast";
import Spiner from "../modules/Spiner";

const SignupPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(signupValidate(form));
  const { isPending, mutate } = useSignUp();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    setError(signupValidate(form));
  }, [form]);

  const signUpHandler = async (e) => {
    e.preventDefault();

    if (Object.keys(error).length !== 0) {
      toast.error("Invalid data!");
      return;
    }

    mutate(form, {
      onSuccess: () => {
        toast.success("Registration was successful");
        router.push("/auth/signin");
      },
      onError: (e) => toast.error(e.response.data.message),
    });
  };

  return (
    <div className=" mt-20 flex justify-center items-center">
      <form
        className="bg-white p-4 rounded-md"
        onChange={changeHandler}
        onSubmit={signUpHandler}
      >
        <h3 className="font-bold text-center pb-6">Register form</h3>
        <div className="flex justify-center items-center flex-col">
          <input
            name="email"
            className="w-72 shadow-md my-2 p-2 mx-4  outline-none rounded-md"
            type="email"
            placeholder="email"
          />
          <input
            name="password"
            className="w-72 shadow-md my-2 p-2 mx-4 outline-none rounded-md"
            type="password"
            placeholder="password"
          />
          <button
            disabled={isPending}
            className="mt-5 w-24 bg-[#66BFBF] rounded-md px-2 py-1 text-white disabled:opacity-[.8] cursor-default md:cursor-pointer disabled:cursor-not-allowed transition-all text-sm"
            type="submit"
          >
            {isPending && <Spiner />}
            <span>Register</span>
          </button>
        </div>

        <div className="text-center pt-6  text-xs">
          <span className="text-gray-500 pr-3">Have a account?</span>
          <Link href="/auth/signin" className="text-[#10439F]">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
