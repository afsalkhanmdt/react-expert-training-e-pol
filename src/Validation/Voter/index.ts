import { JoiName,JoiEmail,JoiDescription, JoiRequiredPassword, JoiRequiredStringWithRange } from "../Common";

const Voter = {
  JoiVoterName: JoiName("Name"),
  JoiVoterPassword: JoiRequiredPassword("Password"),
  JoiVoterEmail: JoiEmail("Email"),
  JoiVoterCollege: JoiRequiredStringWithRange("College"),
  JoiVoterBatch: JoiRequiredStringWithRange("Batch",2,25),
  JoiVoterJoiningYear: JoiRequiredStringWithRange("Joining Year",2,5),
  JoiVoterRegisterNumber: JoiDescription("Register Number"),
};

export default Voter;