import { JoiName,JoiEmail,JoiDescription, JoiRequiredPassword } from "../Common";

const Voter = {
  JoiVoterName: JoiName("Name"),
  JoiVoterPassword: JoiRequiredPassword("Password"),
  JoiVoterEmail: JoiEmail("Email"),
  JoiVoterCollege: JoiDescription("College"),
  JoiVoterBatch: JoiDescription("Batch"),
  JoiVoterRegisterNumber: JoiDescription("Register Number"),
};

export default Voter;