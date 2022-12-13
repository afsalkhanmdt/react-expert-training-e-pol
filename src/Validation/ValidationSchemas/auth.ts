import Joi from "joi";
import Voter from "../Voter"
import Admin from "../Admin"

export const VoterRegisterSchema = Joi.object({
  name: Voter.JoiVoterName,
  password: Voter.JoiVoterPassword,
  email: Voter.JoiVoterEmail,
  college: Voter.JoiVoterCollege,
  batch: Voter.JoiVoterBatch,
  registerNumber: Voter.JoiVoterRegisterNumber
});

export const AdminRegisterSchema = Joi.object({
  name: Admin.JoiAdminName,
  password: Admin.JoiAdminPassword,
  email: Admin.JoiAdminEmail,
  college: Admin.JoiAdminCollege,
});

