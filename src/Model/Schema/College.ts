import mongoose, { Schema } from "mongoose";

const College = new Schema({
  name: String,
  location: String,
},
{
    timestamps: true
}

);

export default mongoose.model("College", College);