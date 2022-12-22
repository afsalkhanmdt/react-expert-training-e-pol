import { Schema } from "mongoose";
import Candidate from "./Candidate";

const ElectionPosition = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    ref: "College"
  },
  candidates:[Candidate],
},
{
    timestamps: true
}

);

export default ElectionPosition