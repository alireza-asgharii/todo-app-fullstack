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

  //update todo
  if (req.method === "PATCH") {
    const { title, status, description, id } = req.body;

    if (!id || !status || !title) {
      return res
        .status(422)
        .json({ status: "failed", message: "Invalid data" });
    }

    try {
      const findTodoIndex = user.todos.findIndex(
        (todo) => todo._id.toString() === id
      );
      if (title) user.todos[findTodoIndex].title = title;
      if (status) user.todos[findTodoIndex].status = status;
      if (description) user.todos[findTodoIndex].description = description;
      user.todos[findTodoIndex].updateAt = Date.now();
      await user.save();

      res
        .status(200)
        .json({ status: "success", message: "Todo has been updated" });
    } catch (error) {
      console.log(error.message);
      res.status(200).json({
        status: "failed",
        message: "error in updating todo in server",
      });
    }
  }
}
