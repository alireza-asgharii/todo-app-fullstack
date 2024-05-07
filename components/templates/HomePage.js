import { useEffect, useState } from "react";
import TodoList from "../modules/TodoList";
import TodoItem from "../modules/TodoItem";

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  const fetchTodos = async () => {
    const res = await fetch("api/todos");
    const data = await res.json();

    if (data.status === "success") setTodos(data.todos);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="flex justify-around ">
      <TodoList name="Todo" color="bg-todo">
        {todos?.todo?.map((todo) => (
          <TodoItem
            key={todo._id}
            color="bg-todo"
            title={todo.title}
            updateAt={todo.updateAt}
          />
        ))}
      </TodoList>

      <TodoList name="In Progress" color="bg-inProgress">
        {todos?.inProgress?.map((todo) => (
          <TodoItem
            key={todo._id}
            color="bg-inProgress"
            title={todo.title}
            updateAt={todo.updateAt}
          />
        ))}
      </TodoList>

      <TodoList name="Review" color="bg-review">
        {todos?.review?.map((todo) => (
          <TodoItem
            key={todo._id}
            color="bg-review"
            title={todo.title}
            updateAt={todo.updateAt}
          />
        ))}
      </TodoList>

      <TodoList name="Done" color="bg-done">
        {todos?.done?.map((todo) => (
          <TodoItem
            key={todo._id}
            color="bg-done"
            title={todo.title}
            updateAt={todo.updateAt}
          />
        ))}
      </TodoList>
    </div>
  );
};

export default HomePage;
