import AddTodoPage from "@/components/templates/AddTodoPage";

import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

const AddTodo = () => {
  return <AddTodoPage />;
};

export default AddTodo;

export async function getServerSideProps({ req, res }) {
  const session = await getServerSession(req, res, authOptions);
  console.log(session)

  if (!session) {
    return {
      redirect: { destination: "/auth/signin", permanent: false },
    };
  }

  return {
    props: {},
  };
}
