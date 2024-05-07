import { dateFormat } from "@/utils/dateFormat";

const TodoItem = ({ title, color, updateAt, next, prev, id, fetchTodos }) => {
  const updateHandler = async (id, status) => {
    console.log({ next, id });

    const res = await fetch("/api/todos", {
      method: "PATCH",
      body: JSON.stringify({ id, status }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    if (data.status === "success") fetchTodos();
  };

  return (
    <div className=" shadow-md px-2 py-3 rounded-md my-5">
      <span className={`w-1/2 h-[3px] mb-3 rounded-md ${color} block`}></span>
      <p className="font-bold">{title}</p>
      <p className="text-right text-xs pt-10 text-gray-400 flex justify-between">
        <span>last update:</span>
        {dateFormat(updateAt)} Tehran time
      </p>
      <div className="flex justify-between pt-5 text-xs font-bold w-full">
        <div className=" w-1/2 text-left">
          {prev && (
            <button
              onClick={() => updateHandler(id, prev)}
              className="rounded-md  bg-[#FF9800] text-white px-2 py-1"
            >
              Prev
            </button>
          )}
        </div>
        <div className="w-1/2 text-right">
          {next && (
            <button
              onClick={() => updateHandler(id, next)}
              className="rounded-md bg-[#2C7865] text-white px-2 py-1 "
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
