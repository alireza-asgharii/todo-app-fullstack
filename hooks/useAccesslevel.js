import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const useAccesslevel = () => {
  const router = useRouter();
  const { status } = useSession();
  useEffect(() => {
    if (status === "authenticated") router.replace("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return { status };
};

export default useAccesslevel;
