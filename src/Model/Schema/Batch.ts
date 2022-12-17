import mongoose, { Schema } from "mongoose";

const Batch = new Schema({
  name: String
},
{
    timestamps: true
}

);

export default Batch