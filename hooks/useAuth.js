import { signUpUser } from "@/services/mutation";
import { useMutation } from "@tanstack/react-query";

export const useSignUp = () => {
  const data = useMutation({ mutationFn: signUpUser });
  return data;
};
