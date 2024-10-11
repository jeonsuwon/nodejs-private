import * as usersRepositroy from '../repository/users.repository.js';
import { CustomError } from '../constants/custom.error.js';
import {
  HASH_SALT_ROUNDS,
  ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_EXPIRES_IN,
} from '../constants/auth.constants.js';
import bcrypt from 'bcrypt';

// 회원가입
export const signUp = async (email, password, name, confirmPassword) => {
  const existEmail = await usersRepositroy.findEmailById(email);
  if (existEmail) throw new CustomError('이미 존재하는 이메일입니다', 409);

  if (password !== confirmPassword) {
    throw new CustomError('두 패스워드가 일치하지 않습니다', 409);
  }
  const hashedPassword = bcrypt.hashSync(password, HASH_SALT_ROUNDS);
  const data = await usersRepositroy.signUp(email, hashedPassword, name);
  return data;
};
