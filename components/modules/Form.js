import Link from "next/link";
import Spiner from "./Spiner";

const Form = ({ current, other, changeHandler, signHandler, isLoading }) => {
  return (
    <div className=" mt-20 flex justify-center items-center">
      <form
        className="bg-white p-4 rounded-md"
        onChange={changeHandler}
        onSubmit={signHandler}
      >
        <h3 className="font-bold text-center pb-6">{current} form</h3>
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
            disabled={isLoading}
            className="mt-5 w-20 bg-[#66BFBF] rounded-md px-2 py-1 text-white disabled:opacity-[.8] disabled:cursor-not-allowed cursor-default md:cursor-pointer text-sm transition-all"
            type="submit"
          >
            {isLoading && <Spiner />}
            <span> {current}</span>
          </button>
        </div>

        <div className="text-center pt-6  text-xs">
          <span className="text-gray-500 pr-3">Have a account?</span>
          <Link
            href={`/auth/${other === "Sign Up" ? "signup" : "signin"}`}
            className="text-[#10439F]"
          >
            {other}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
