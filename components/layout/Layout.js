import Sidebar from "../modules/Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <header className="p-2 h-20 bg-[#10439F] text-white">
        <h1 className="font-bold">2-A Todo App</h1>
      </header>
      <main className=" flex items-start  bg-[#EEF7FF] min-h-screen">
        <Sidebar />
        <section className="p-3 w-5/6">{children}</section>
      </main>
    </div>
  );
};

export default Layout;
