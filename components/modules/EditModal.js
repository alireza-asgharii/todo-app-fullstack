import { MdClose } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import RadioButtomsModal from "./RadioButtomsModal";
import { useState } from "react";
import { useUpdatetodo } from "@/hooks/useTodosQuery";
import Spiner from "./Spiner";

const EditModal = ({
  defaultTitle,
  defaultDescription,
  id,
  status,
  setModal,
  fetchTodos,
}) => {
  const [form, setForm] = useState({
    title: defaultTitle,
    description: defaultDescription,
    status: status,
  });

  const { mutate, isPending } = useUpdatetodo();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  document.addEventListener("keypress", (e) => {
    const key = e.key;
    if (key === "Escape") setModal(false);
  });

  const saveHandler = async (e) => {
    e.preventDefault();

    mutate(
      { ...form, id },
      {
        onSuccess: () => {
          fetchTodos();
          setModal(false);
        },
      }
    );
  };

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center min-w-screen min-h-screen z-10 backdrop-blur-[2px]">
      <div className="bg-white border-2 p-3 rounded-md  w-80 relative">
        <span
          onClick={() => setModal(false)}
          className="absolute top-3 right-2 text-red-600 md:cursor-pointer border-2 border-transparent hover:border-red-600 rounded-md transition-colors"
        >
          <MdClose />
        </span>
        <h4 className="font-bold flex justify-start items-center">
          <span className="pr-3">Edit Todo</span> <FaRegEdit />
        </h4>
        <form className="pt-5 flex flex-col" onSubmit={saveHandler}>
          <input
            name="title"
            type="text"
            value={form.title}
            required
            onChange={changeHandler}
            placeholder="Title"
            className="px-2 py-1 rounded-md outline-none border-2 my-2"
          />

          <textarea
            type="text"
            name="description"
            value={form.description}
            onChange={changeHandler}
            placeholder="Description"
            className="px-2 py-1 rounded-md outline-none border-2 my-2 resize-none"
          />

          <RadioButtomsModal
            status={form.status}
            changeHandler={changeHandler}
          />

          <div className="text-right">
            <button
              disabled={isPending}
              type="submit"
              className={`disabled:cursor-not-allowed disabled:opacity-[.7] px-2 py-1 w-16 font-bold bg-green-600 text-white rounded-md text-sm cursor-default md:cursor-pointer my-3 mt-8`}
            >
              {isPending && <Spiner />}
              <span>Save</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
