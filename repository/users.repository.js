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

export const findEmailById = async (email) => {
  console.log(email);
  return await prisma.users.findFirst({ where: { email } });
};
