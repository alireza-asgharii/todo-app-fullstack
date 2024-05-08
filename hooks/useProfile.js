import { updateProfile } from "@/services/mutation";
import { fetchProfile } from "@/services/query";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useProfile = () => {
  const data = useQuery({
    queryKey: ["profie"],
    queryFn: fetchProfile,
    staleTime: 1 * 60 * 60 * 1000
  });
  return data;
};

export const useUpdateProfile = () => {
  const data = useMutation({ mutationFn: updateProfile });
  return data;
};
