import mongoose, { Schema } from "mongoose";

const Voter = new Schema({
  name: String,
  email:String,
  password:String,
  college:{
    type: Schema.Types.ObjectId,
    ref:'College'
},
  batch:String,
  registerNumber:String,
},
{
    timestamps: true
}

);

export default mongoose.model("Voter", Voter);