import { Schema } from "mongoose";
import Candidate from "./Candidate";

const ElectionPosition = new Schema({
  position: {
    type: Schema.Types.ObjectId,
    ref: "College.positions"
  },
  candidates:[Candidate],
},
{
    timestamps: true
}

);

export default ElectionPosition