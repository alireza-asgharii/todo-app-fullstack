import Sidebar from "../modules/Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="max-w-screen-2xl m-auto">
      <Header />
      <main className=" flex items-start  bg-[#EEF7FF] min-h-screen ">
        <Sidebar />
        <section className="p-3 md:w-5/6 w-full">{children}</section>
      </main>
    </div>
  );
};

export default Layout;
