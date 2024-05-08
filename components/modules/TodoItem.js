import { dateFormat } from "@/utils/dateFormat";
import { useEffect, useState } from "react";

import { FaRegEdit } from "react-icons/fa";
import EditModal from "./EditModal";
import { useUpdateStatus } from "@/hooks/useTodosQuery";
import Spiner from "./Spiner";

const TodoItem = ({
  title,
  color,
  updateAt,
  next,
  prev,
  id,
  fetchTodos,
  description,
  status,
}) => {
  const [modal, setModal] = useState(false);
  const { isPending, mutate } = useUpdateStatus();

  useEffect(() => {
    if (modal) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [modal]);

  document.addEventListener("keydown", (e) => {
    const key = e.key;
    if (key === "Escape") setModal(false);
  });

  const updateHandler = async (id, status) => {
    mutate(
      { id, status },
      {
        onSuccess: () => fetchTodos(),
      }
    );
  };

  const editButtonHandler = () => {
    setModal(true);
  };

  return (
    <div className=" shadow-md px-2 py-3 rounded-md my-5 relative">
      {modal && (
        <EditModal
          defaultTitle={title}
          defaultDescription={description}
          id={id}
          status={status}
          setModal={setModal}
          fetchTodos={fetchTodos}
        />
      )}
      <span
        onClick={editButtonHandler}
        title="edit todo"
        className="absolute top-1 right-1 opacity-[.6] md:cursor-pointer"
      >
        <FaRegEdit />
      </span>
      <span className={`w-1/2 h-[3px] mb-3 rounded-md ${color} block`}></span>
      <p className="font-bold">
        {title} {isPending && <Spiner />}
      </p>
      <p className="text-right text-xs pt-10 text-gray-400 flex justify-between">
        <span>last update:</span>
        {dateFormat(updateAt)} Tehran time
      </p>
      <div className="flex justify-between pt-5 text-xs font-bold w-full">
        <div className=" w-1/2 text-left">
          {prev && (
            <button
              onClick={() => updateHandler(id, prev)}
              className="transition-colors rounded-md bg-[#FF9800] text-white px-2 py-1 flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-[.8]"
              disabled={isPending}
            >
              <span>Prev</span>
            </button>
          )}
        </div>
        <div className="w-1/2 text-right">
          {next && (
            <button
              onClick={() => updateHandler(id, next)}
              disabled={isPending}
              className="transition-colors rounded-md bg-[#2C7865] text-white px-2 py-1 disabled:cursor-not-allowed disabled:opacity-[.8]"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
