import { hash, compare } from "bcryptjs";

export async function hashPassword(password) {
  const hashedPass = await hash(password, 12);
  return hashedPass;
}

export async function verifyPasswprd(password, hashedPass) {
  const isValid = await compare(password, hashedPass);
  return isValid;
}
