const RadioButton = ({
  name,
  title,
  icon,
  radioChangeHandler,
  rdaioState,
  theme,
}) => {
  return (
    <label
      htmlFor={name}
      className={`p-2 ${theme} min-w-[120px] max-w-[140px] rounded-md flex justify-between my-2 md:cursor-pointer [&[id=""]]`}
    >
      <span className="flex items-center">
        {icon} <span className="px-1">{title}</span>
      </span>
      <input
        type="radio"
        value={name}
        id={name}
        name="todo-radio"
        onChange={radioChangeHandler}
        checked={rdaioState === name}
      />
    </label>
  );
};

export default RadioButton;
