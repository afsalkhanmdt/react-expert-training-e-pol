import mongoose, { Schema } from "mongoose";
import Batch from "./Batch";
import Position from "./Position";

const College = new Schema({
  name: String,
  location: String,
  batches: [
    Batch
  ],
  positions:[Position]
},
{
    timestamps: true
}

);

export default mongoose.model("College", College);