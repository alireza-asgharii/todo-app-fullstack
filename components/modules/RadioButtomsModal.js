import RadioButtomModal from "./RadioButtomModal";

const RadioButtomsModal = ({status, changeHandler}) => {
  return (
    <div className="flex justify-between  ">
      <RadioButtomModal
        name="todo"
        color="bg-todo"
        title="Todo"
        status={status}
        changeHandler={changeHandler}
      />
      <RadioButtomModal
        name="inProgress"
        color="bg-inProgress"
        title="In Progress"
        status={status}
        changeHandler={changeHandler}
      />
      <RadioButtomModal
        name="review"
        color="bg-review"
        title="Review"
        status={status}
        changeHandler={changeHandler}
      />
      <RadioButtomModal
        name="done"
        color="bg-done"
        title="Done"
        status={status}
        changeHandler={changeHandler}
      />
    </div>
  );
};

export default RadioButtomsModal;
