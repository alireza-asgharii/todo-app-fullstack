import { addTodo, updateStatus, updateTodo } from "@/services/mutation";
import { fetchTodos } from "@/services/query";
import { useMutation, useQuery } from "@tanstack/react-query";

const useTodosQuery = () => {
  const data = useQuery({ queryKey: ["todos"], queryFn: fetchTodos });

  return data;
};

export const useUpdateStatus = () => {
  const data = useMutation({ mutationFn: updateStatus });
  return data;
};

export const useUpdatetodo = () => {
  const data = useMutation({ mutationFn: updateTodo });
  return data;
};

export const useAddTodo= () => {
  const data = useMutation({ mutationFn: addTodo });
  return data;
};

export default useTodosQuery;
