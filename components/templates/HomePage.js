import TodoList from "../modules/TodoList";
import TodoItem from "../modules/TodoItem";
import useTodosQuery from "@/hooks/useTodosQuery";

const HomePage = () => {
  const { data, isLoading, error, refetch } = useTodosQuery();

  if (isLoading) return <h2>loading...</h2>;
  if (error) return <h2>Error</h2>;
  return (
    <div className=" justify-around md:flex">
      <TodoList name="Todo" color="bg-todo">
        {data?.data.todos?.todo?.map((todo) => (
          <TodoItem
            key={todo._id}
            color="bg-todo"
            title={todo.title}
            description={todo.description}
            status={todo.status}
            updateAt={todo.updateAt}
            next="inProgress"
            fetchTodos={refetch}
            id={todo._id}
          />
        ))}
      </TodoList>

      <TodoList name="In Progress" color="bg-inProgress">
        {data?.data.todos?.inProgress?.map((todo) => (
          <TodoItem
            key={todo._id}
            color="bg-inProgress"
            title={todo.title}
            description={todo.description}
            status={todo.status}
            updateAt={todo.updateAt}
            prev="todo"
            next="review"
            fetchTodos={refetch}
            id={todo._id}
          />
        ))}
      </TodoList>

      <TodoList name="Review" color="bg-review">
        {data?.data.todos?.review?.map((todo) => (
          <TodoItem
            key={todo._id}
            color="bg-review"
            title={todo.title}
            description={todo.description}
            status={todo.status}
            updateAt={todo.updateAt}
            prev="inProgress"
            next="done"
            fetchTodos={refetch}
            id={todo._id}
          />
        ))}
      </TodoList>

      <TodoList name="Done" color="bg-done">
        {data?.data.todos?.done?.map((todo) => (
          <TodoItem
            key={todo._id}
            color="bg-done"
            title={todo.title}
            description={todo.description}
            status={todo.status}
            updateAt={todo.updateAt}
            prev="review"
            fetchTodos={refetch}
            id={todo._id}
          />
        ))}
      </TodoList>
    </div>
  );
};

export default HomePage;
