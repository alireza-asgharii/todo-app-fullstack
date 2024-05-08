const RadioButtomModal = ({ name, color, title, status, changeHandler }) => {
  return (
    <label
      className={` text-sm flex items-center ${color} w-fit p-1 rounded-md text-white`}
    >
      <span className="pr-2 select-none">{title}</span>
      <input
        value={name}
        id={name}
        name="status"
        type="radio"
        className=" rounded-md outline-none border-2  w-[10px] h-[10px] mt-1 "
        onChange={changeHandler}
        checked={status === name}
      />
    </label>
  );
};

export default RadioButtomModal;
