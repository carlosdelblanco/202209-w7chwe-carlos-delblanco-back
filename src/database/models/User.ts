import { model, Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  backupPicture: {
    type: String,
  },
  enemies: [String],
  friends: [String],
});

// eslint-disable-next-line @typescript-eslint/naming-convention
const User = model("User", userSchema, "users");

export default User;
