import { Schema } from "mongoose";

const Candidate = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref:'Voter'
  },
  image: String,
},
{
    timestamps: true
}

);

export default Candidate