import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { signupValidate } from "@/utils/validate";

const SignupPage = () => {
  const router = useRouter()
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

  const signUpHandler = async (e) => {
    e.preventDefault();

    if (Object.keys(error).length !== 0) {
      console.log("Invalid data");
      return;
    }

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      
      console.log(data);
      if (data.status === "success") router.push('/auth/signin')

    } catch (error) {
      console.log(error);
    }
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
            className="mt-5 bg-[#66BFBF] rounded-md px-2 py-1 text-white "
            type="submit"
          >
            Register
          </button>
        </div>

        <div className="text-center pt-6  text-sm">
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
