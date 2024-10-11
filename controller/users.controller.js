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

//로그인
export const signIn = async (req, res) => {
  const { email, password } = req.body;

  const data = await usersService.signIn(email, password);
  const [accessToken, refreshToken] = data;
  res.cookie('accessToken', `Bearer ` + accessToken); // Access Token을 Cookie에 전달한다.
  res.cookie('refreshToken', `Bearer ` + refreshToken); // Refresh Token을 Cookie에 전달한다.
  return res
    .status(200)
    .send({ message: '정상적으로 로그인 되었습니다.', Token: accessToken });
};
