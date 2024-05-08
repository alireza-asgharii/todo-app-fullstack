import ProfilePage from "@/components/templates/ProfilePage";

import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

const profile = () => {
  return <ProfilePage />;
};

export default profile;

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
