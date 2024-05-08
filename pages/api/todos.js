import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import sortTodo from "@/utils/sortTodos";

export default async function handler(req, res) {
  //connect to DB
  try {
    await connectDB();
    console.log("connect DB");
  } catch (error) {
    console.log(error.message);
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
    const { title, status, description } = req.body;

    if (!title || !status) {
      return res
        .status(422)
        .json({ status: "failed", message: "Invalid data" });
    }

    user.todos.push({ title, status, description });
    user.save();

    return res
      .status(201)
      .json({ status: "success", message: "todo was created successfully" });
  } else if (req.method === "GET") {
    const sortedTodos = sortTodo(user.todos);
    res.status(200).json({ status: "success", todos: sortedTodos });
  } else if (req.method === "PATCH") {
    const { status, id } = req.body;

    if (!id || !status) {
      return res
        .status(422)
        .json({ status: "failed", message: "Invalid data" });
    }

    try {
      await User.updateOne(
        { "todos._id": id },
        {
          $set: {
            "todos.$.status": status,
            "todos.$.updateAt": Date.now(),
          },
        }
      );

      res.status(200).json({
        status: "success",
        message: "Todo has been updated",
      });
    } catch (error) {
      console.log(error.message);
      res.status(200).json({
        status: "failed",
        message: "error in updating todo in server",
      });
    }
  }
}
