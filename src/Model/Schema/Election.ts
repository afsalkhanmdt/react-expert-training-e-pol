import mongoose, { Schema } from "mongoose";
import ElectionPosition from "./ElectionPosition";

const Election = new Schema({
  name: String,
  positions:[ElectionPosition],
  college:{
    type: Schema.Types.ObjectId,
    ref:'College'
}
},
{
    timestamps: true
}

);

export default mongoose.model("Election", Election);