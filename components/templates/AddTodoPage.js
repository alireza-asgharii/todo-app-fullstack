import { useState } from "react";
import { LuListTodo } from "react-icons/lu";
import RadioButton from "../modules/RadioButton";

const AddTodoPage = () => {
  const [title, setTitle] = useState("");
  const [radio, setRadio] = useState("todo");

  const radioChangeHandler = (e) => {
    setRadio(e.target.value);
  };

  const addTodoHandler = async () => {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title, status: radio }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    console.log(data);
  };

  return (
    <div>
      <h3 className="text-xl font-bold p-3">Add todo</h3>

      <div className="m-3 mt-5">
        <input
          className="p-1 px-2 outline-none rounded-md"
          type="text"
          name="add-todo"
          placeholder="todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

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
          onClick={addTodoHandler}
          className="text-white p-1 px-4 my-6 bg-[#1679AB] rounded-md"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodoPage;
