import { useState } from "react";
import { LuListTodo } from "react-icons/lu";
import RadioButton from "../modules/RadioButton";
import { useAddTodo } from "@/hooks/useTodosQuery";
import toast from "react-hot-toast";
import Spiner from "../modules/Spiner";

const AddTodoPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [radio, setRadio] = useState("todo");
  const { isPending, mutate } = useAddTodo();

  const radioChangeHandler = (e) => {
    setRadio(e.target.value);
  };

  const addTodoHandler = async () => {
    mutate(
      { title, status: radio, description },
      {
        onSuccess: () => {
          toast.success("Todo added successfully");
          setTitle("");
          setDescription("");
          setRadio('todo');
        },
        onError: (e) => toast.error(e.response.data.message),
      }
    );
  };

  return (
    <div>
      <h3 className="text-xl font-bold p-3">Add todo</h3>

      <div className="m-3 mt-5">
        <div className="flex flex-col max-w-96">
          <input
            className="p-1 px-2 outline-none rounded-md"
            type="text"
            placeholder="todo title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="p-1 px-2 outline-none rounded-md my-3"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mt-5 text-white ">
          <RadioButton
            name="todo"
            title="Todo"
            rdaioState={radio}
            radioChangeHandler={radioChangeHandler}
            icon={<LuListTodo />}
            theme="#1679AB"
          />
          <RadioButton
            name="inProgress"
            title="in Progress"
            rdaioState={radio}
            radioChangeHandler={radioChangeHandler}
            icon={<LuListTodo />}
            theme="#1679AB"
          />
          <RadioButton
            name="review"
            title="review"
            rdaioState={radio}
            radioChangeHandler={radioChangeHandler}
            icon={<LuListTodo />}
            theme="#1679AB"
          />
          <RadioButton
            name="done"
            title="done"
            rdaioState={radio}
            radioChangeHandler={radioChangeHandler}
            icon={<LuListTodo />}
            theme="#535C91"
          />
        </div>

        <button
          disabled={isPending}
          onClick={addTodoHandler}
          className="text-white p-1 px-2 w-16 my-6 bg-[#1679AB] rounded-md cursor-default md:cursor-pointer disabled:cursor-not-allowed disabled:opacity-[.7]"
        >
          {isPending && <Spiner />}
          <span className="text-sm">Add</span>
        </button>
      </div>
    </div>
  );
};

export default AddTodoPage;
