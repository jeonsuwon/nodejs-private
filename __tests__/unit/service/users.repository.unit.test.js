import { beforeEach, describe, jest, test, expect } from '@jest/globals';
import * as usersService from '../../../service/users.service.js';
import { dummyUsers } from '../../dommies/users.dommies.js';

// TODO: 필요에 따라 모듈 이름을 고유하게 수정합니다.
const mockUsersRepository = {
  create: jest.fn(),
  findMany: jest.fn(),
  findUnique: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

// 클래스 이름을 명확히 하기 위해 UsersServiceModule로부터 가져온 후 다른 이름으로 할당합니다.

describe('UsersService Unit Test', () => {
  beforeEach(() => {
    jest.resetAllMocks(); // 모든 Mock을 초기화합니다
  });

  test('create Method', async () => {
    // GIVEN
    const { email, password, name } = dummyUsers[1];
    const mockReturn = {
      id: 100,
      email,
      password,
      name,
      createAt: new Date(),
      updateAt: new Date(),
    };
    mockUsersRepository.create.mockResolvedValue(mockReturn);

    // WHEN
    const actualResult = await usersService.signUp({
      email,
      password,
      name,
    });

    // THEN
    const expectedResult = mockReturn;

    expect(mockUsersRepository.create).toHaveBeenCalledTimes(1);
    expect(mockUsersRepository.create).toBeCalledWith({
      data: {
        email,
        password,
        name,
      },
    });
    expect(actualResult).toEqual(expectedResult);
  });
});

test('readMany Method', async () => {
  // GIVEN
  // WHEN
  // THEN
});

test('readOne Method', async () => {
  // GIVEN
  // WHEN
  // THEN
});

test('update Method', async () => {
  // GIVEN
  // WHEN
  // THEN
});

test('delete Method', async () => {
  // GIVEN
  // WHEN
  // THEN
});
