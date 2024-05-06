import { models, model, Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  todos: [
    {
      title: String,
      status: "todo" | "progress" | "review" | "done",
      createAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
      },
      updateAt: {
        type: Date,
        default: () => Date.now(),
      },
    },
  ],
  createAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const User = models.User || model("user", userSchema);

export default User;
