import { compare, hash } from 'bcryptjs';

export async function hashPassword(password: string) {
  return hash(password, 10);
}

export async function comparePasswords(password: string, hashedPassword: string) {
  return compare(password, hashedPassword);
}
