import { JoiName,JoiRequiredEmail,JoiDescription, JoiRequiredPassword } from "../Common";

const Admin = {
  JoiAdminName: JoiName("Name"),
  JoiAdminPassword: JoiRequiredPassword("Password"),
  JoiAdminEmail: JoiRequiredEmail("Email"),
  JoiAdminCollege: JoiDescription("College"),
};


export default Admin;