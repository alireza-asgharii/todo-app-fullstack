import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  //connect to DB
  try {
    await connectDB();
    console.log("connect DB");
  } catch (error) {
    console.log(error.message)
    return res
      .status(500)
      .json({ status: "failed", message: "error in connecting to DB" });
  }

  //verify user
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res
      .status(401)
      .json({ status: "failed", message: "You are not logged in!" });
  }

  const user = await User.findOne({ email: session.user.email });
  if (!user) {
    return res
      .status(404)
      .json({ status: "failed", message: "There is no user" });
  }

  //create todo
  if (req.method === "POST") {
    const { title, status } = req.body;

    if (!title || !status) {
      return res
        .status(422)
        .json({ status: "failed", message: "There is no user" });
    }

    user.todos.push({ title, status });
    user.save();

    return res
      .status(201)
      .json({ status: "success", message: "todo was created successfully" });
  }
}
