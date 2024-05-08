import Sidebar from "../modules/Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className=" flex items-start  bg-[#EEF7FF] min-h-screen">
        <Sidebar />
        <section className="p-3 w-5/6">{children}</section>
      </main>
    </div>
  );
};

export default Layout;
