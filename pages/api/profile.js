import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import User from "@/models/User";

export default async function handler(req, res) {
  //connectDB
  try {
    await connectDB();
    console.log("connect DB");
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ status: "failed", message: "error in connecting to DB" });
  }

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res
      .status(401)
      .json({ status: "failed", message: "You are not logged in!" });
  }

  if (req.method === "PATCH") {
    const { name } = req.body;

    if (!name) {
      return res
        .status(422)
        .json({ status: "failed", message: "Invalid data" });
    }

    try {
      const user = await User.findOneAndUpdate(
        { email: session.user.email },
        { name }
      );
      if (!user) {
        return res
          .status(404)
          .json({ status: "failed", message: "User not found" });
      }

      res
        .status(200)
        .json({ status: "success", message: "Saved user account changes" });
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ status: "failed", message: "error in updating in DB" });
    }
  } else if (req.method === "GET") {
    try {
      const user = await User.findOne({ email: session.user.email });
      console.log(user);

      if (!user) {
        return res
          .status(404)
          .json({ status: "failed", message: "User not found" });
      }

      res.status(200).json({
        status: "success",
        data: { name: user.name, email: user.email },
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        status: "failed",
        message: "error in get data from DB",
      });
    }
  }
}
