import mongoose, { Schema } from "mongoose";
import ElectionPosition from "./ElectionPosition";

const Election = new Schema(
  {
    name: String,
    positions: [ElectionPosition],
    status: { type: String, default: "draft" }, //! draft,ongoing,completed
    voters: [
      {
        type: Schema.Types.ObjectId,
        ref: "Voter",
      },
    ],
    college: {
      type: Schema.Types.ObjectId,
      ref: "College",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Election", Election);
