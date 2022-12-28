import { hashPassword } from "../../Utils";
import Voter from "../Schema/Voter";

export const createVoter = async (voter: any) => {
  const result = await Voter.create({
    ...voter,
    password: await hashPassword(voter.password),
  });
  return result;
};

export const getVoterByEmail = async (email: any) => {
  const result = await Voter.findOne({
    email,
  });
  return result;
};
export const getVoterById = async (id: any) => {
  const result = await Voter.findById(id);
  return result;
};

export const getVoterByRegisterNumber = async (registerNumber: any) => {
  const result = await Voter.findOne({
    registerNumber,
  });
  return result;
};
export const getVoterByCollege = async (college: any) => {
  const result = await Voter.find({
    college,
  });
  return result;
};
