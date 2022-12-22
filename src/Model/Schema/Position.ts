import { Schema } from "mongoose";

const Position = new Schema({
  name: String
},
{
    timestamps: true
}

);

export default Position