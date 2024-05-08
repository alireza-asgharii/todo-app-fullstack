const ProfileForm = ({ name, setName, submitHandler }) => {
  return (
    <div className="py-5">
      <label className="pr-3" htmlFor="name">
        name:
      </label>
      <input
        className="outline-none px-2 py-1 rounded-md shadow-md"
        id="name"
        placeholder="enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={submitHandler}
        className="bg-green-700 px-2 py-1 text-white rounded-md cursor-default md:cursor-pointer m-2"
      >
        save
      </button>
    </div>
  );
};

export default ProfileForm;
