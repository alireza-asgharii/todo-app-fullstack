import { useSession } from "next-auth/react";
import NavLink from "./NavLink";

const Sidebar = () => {
  const { data } = useSession();
  return (
    <aside className="p-4 px-6 w-1/6 bg-white relative bottom-7 rounded-md min-h-screen hidden md:block">
      <h4 className="font-bold pb-4">
        Wellcome👋
        <span>{data?.name}</span>
      </h4>
      <ul className=" [&_li]:rounded-md">
        <NavLink title="Todos" path="/" />
        <NavLink title="Profile" path="/profile" />
        <NavLink title="Add Todo" path="/add-todo" />
      </ul>
    </aside>
  );
};

export default Sidebar;
