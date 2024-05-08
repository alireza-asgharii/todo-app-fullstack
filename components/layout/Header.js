import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Header = () => {
  const { status } = useSession();
  const router = useRouter();

  const logOutHandler = async () => {
    await signOut({ redirect: false });
    router.replace("/auth/signin");
  };
  return (
    <header className="p-2 h-20 bg-[#10439F] text-white flex justify-between items-start">
      <h1 className="font-bold">2-A Todo App</h1>
      {status === "authenticated" && (
        <button
          onClick={logOutHandler}
          className="border-2 rounded-md hover:border-[#DD5746] hover:bg-[#DD5746] transition-colors px-2 py-1 cursor-default md:cursor-pointer text-sm font-bold"
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
