import { prisma } from '../untils/prisma.untils.js';

//회원가입
export const signUp = async (email, password, name) => {
  const data = await prisma.users.create({
    data: {
      email,
      password,
      name,
    },
  });
  return data;
};
