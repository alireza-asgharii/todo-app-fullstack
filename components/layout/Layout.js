const Layout = ({ children }) => {
  return (
    <div>
      <header className="p-2 h-20 bg-[#10439F] text-white">
        <h1 className="font-bold">2-A Todo App</h1>
      </header>
      <main className=" flex items-start  bg-[#EEF7FF] min-h-screen">
        <aside className="p-4 px-6 w-1/6 bg-white relative bottom-7 rounded-md min-h-screen">
          <h4 className="font-bold pb-4">Wellcome👋</h4>
          <ul>
            <li>todos</li>
            <li>profile</li>
          </ul>
        </aside>
        <section className="p-3 w-5/6">{children}</section>
      </main>
    </div>
  );
};

export default Layout;
