import { dateFormat } from "@/utils/dateFormat";

const TodoItem = ({ title, color, updateAt }) => {
  return (
    <div className=" shadow-md px-2 py-3 rounded-md my-5">
      <span className={`w-1/2 h-[3px] mb-3 rounded-md ${color} block`}></span>
      <p className="font-bold">{title}</p>
      <p className="text-right text-xs pt-10 text-gray-400 flex justify-between">
        <span>last update:</span>
        {dateFormat(updateAt)} Tehran time
      </p>
    </div>
  );
};

export default TodoItem;
