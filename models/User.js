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
      status: {
        type: String,
      },
      description: String,
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

const User = models.User || model("User", userSchema);

export default User;
