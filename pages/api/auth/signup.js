import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  if (req.method !== "POST") return;

  //connect to DB
  try {
    await connectDB();
    console.log("connect DB");
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", message: "error in connecting to DB" });
  }

  const { email, password } = req.body;

  //check field
  if (!email || !password) {
    res.status(401).json({ status: "failed", message: "Invalid data" });
    return;
  }

  //user existence
  try {
    const user = await User.findOne({ email: email });

    if (user) {
      return res.status(401).json({
        status: "failed",
        message: "User with this email already exists",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: "error in searching in DB",
    });
  }

  //create user
  try {
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({ email, password: hashedPassword });
    res
      .status(201)
      .json({ status: "success", message: "User was created", data: newUser });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ status: "failed", message: "error in create user in DB" });
  }
}
