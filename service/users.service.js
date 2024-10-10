import * as usersRepositroy from '../repository/users.repository.js';

//회원가입
export const signUp = async (email, password, name, confirmPassword) => {
  const existEmail = await usersRepositroy.findEmailById(email);
  if (existEmail) throw new Error('존재하는 이메일입니다.');

  const data = await usersRepositroy.signUp(email, password, name);
  return data;
};
