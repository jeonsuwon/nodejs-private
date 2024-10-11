import { prisma } from '../untils/prisma.untils.js';

//회원가입
export const signUp = async (email, hashedPassword, name) => {
  const data = await prisma.users.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });
  return data;
};

export const findEmailByEmail = async (email) => {
  return await prisma.users.findFirst({ where: { email } });
};
