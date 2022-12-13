import mongoose, { Schema } from "mongoose";

const Admin = new Schema({
  name: String,
  email:String,
  password:String,
  college:{
    type: Schema.Types.ObjectId,
    ref:'College'
}
},
{
    timestamps: true
}

);

export default mongoose.model("Admin", Admin);