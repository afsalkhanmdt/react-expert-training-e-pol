import { sign, verify } from "jsonwebtoken";
import { TOKEN_SECRET } from "../../../Config/env";

export const generateToken = (data: object) => {
  const accessToken = sign(
    {
      ...data,
    },
    TOKEN_SECRET
  );
  return accessToken;
};




export const verifyToken = (token: string): Promise<{ type: string }> =>
  new Promise((resolve, reject) => {
    verify(token, TOKEN_SECRET, (err, decoded?: { type: string }) => {
      if (err) {
        return reject(err);
      } else {
        resolve(decoded);
      }
    });
  });

const JWT = {
  generateToken,
  verifyToken,
};

export default JWT;
