import mongoose, { Schema } from "mongoose";
import Batch from "./Batch";

const College = new Schema({
  name: String,
  location: String,
  batches: [
    Batch
  ]
},
{
    timestamps: true
}

);

export default mongoose.model("College", College);