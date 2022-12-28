import { Schema } from "mongoose";

const Candidate = new Schema(
  {
    student: {
      type: Schema.Types.ObjectId,
      ref: "Voter",
    },
    votes: { type: Number, default: 0 },
    image: String,
  },
  {
    timestamps: true,
  }
);

export default Candidate;
