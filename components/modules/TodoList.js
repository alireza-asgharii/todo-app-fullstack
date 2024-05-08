const TodoList = ({ color, name, children }) => {
  return (
    <div className="md:w-1/4  max-w-[300px] mx-auto mb-7 md:my-0 md:mx-3 min-h-full bg-white rounded-md overflow-hidden">
      <p
        className={`p-1 px-2 rounded-md rounded-b-none ${color} text-white font-bold text-center`}
      >
        {name}
      </p>

      <div className="h-fit px-4">
        {/* todo items */}
        {children}
      </div>
    </div>
  );
};

export default TodoList;
