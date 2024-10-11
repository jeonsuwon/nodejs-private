import * as usersService from '../service/users.service.js';

//회원가입
export const signUp = async (req, res) => {
  const { email, password, name, confirmPassword } = req.body;

  const data = await usersService.signUp(
    email,
    password,
    name,
    confirmPassword
  );

  return res
    .status(200)
    .send({ message: '정상적으로 회원가입이 완료되었습니다.', data });
};
