import * as usersRepositroy from '../repository/users.repository.js';
import { CustomError } from '../constants/custom.error.js';
import {
  HASH_SALT_ROUNDS,
  ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_EXPIRES_IN,
} from '../constants/auth.constants.js';
import bcrypt from 'bcrypt';
import { ENV_KEY } from '../constants/env.constants.js';
import jwt from 'jsonwebtoken';

// 회원가입
export const signUp = async (email, password, name, confirmPassword) => {
  const existEmail = await usersRepositroy.findEmailByEmail(email);
  if (existEmail) throw new CustomError('이미 존재하는 이메일입니다', 409);

  if (password !== confirmPassword) {
    throw new CustomError('두 패스워드가 일치하지 않습니다', 409);
  }
  const hashedPassword = bcrypt.hashSync(password, HASH_SALT_ROUNDS);
  const data = await usersRepositroy.signUp(email, hashedPassword, name);
  return data;
};

//로그인
export const signIn = async (email, password) => {
  const user = await usersRepositroy.findEmailByEmail(email);

  if (!user) throw new CustomError('유저 정보가 없습니다.', 409);

  const comparedPassowrd = bcrypt.compareSync(password, user.password);

  if (!comparedPassowrd)
    throw new CustomError('패스워드가 일치하지않습니다.', 409);

  // accesstoken, refreshtoken 발급
  const { id } = user;
  const accessToken = createAccessToken(id);
  const refreshToken = createRefreshToken(id);
  console.log(accessToken);
  console.log(refreshToken);

  return [accessToken, refreshToken];
};

// Access Token을 생성하는 함수
function createAccessToken(id) {
  const accessToken = jwt.sign(
    { id: id }, // JWT 데이터
    ENV_KEY.ACCESS_TOKEN_SECRET, // Access Token의 비밀 키
    { expiresIn: ACCESS_TOKEN_EXPIRES_IN } // Access Token이 10초 뒤에 만료되도록 설정합니다.
  );

  return accessToken;
}

// Refresh Token을 생성하는 함수
function createRefreshToken(id) {
  const refreshToken = jwt.sign(
    { id: id }, // JWT 데이터
    ENV_KEY.REFRESH_TOKEN_SECRET, // Refresh Token의 비밀 키
    { expiresIn: REFRESH_TOKEN_EXPIRES_IN } // Refresh Token이 7일 뒤에 만료되도록 설정합니다.
  );

  return refreshToken;
}
