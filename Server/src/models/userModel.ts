import { Schema, model } from "mongoose";
import  { type IUser, UserAccountType } from "../interfaces/user.model.js";

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: { type: String, required: true },

    isOnline: { type: Boolean, default: false },
    is_blocked: { type: Boolean, default: false },
    last_seen: { type: Date, default: Date.now },
        block_count: { type: Number, default: 0 },
    
    account_type: {
      type: String,
      enum: [ UserAccountType.PRIVATE, UserAccountType.PUBLIC ],
      default: UserAccountType.PUBLIC,
    },
  },
  { timestamps: true },
);

const userModel = model<IUser>("User", userSchema);
export default userModel;
