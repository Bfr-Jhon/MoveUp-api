import { beforeEach, describe, expect, it, vi } from 'vitest';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

const usersService = {
  createUser: vi.fn(),
  getUsers: vi.fn(),
};

let usersController: UsersController;

beforeEach(() => {
  vi.clearAllMocks();

  usersController = new UsersController(usersService as any);
});

it('deve criar um usuário', async () => {
  const user: User = {
    id: 1,
    name: 'Jhon',
    email: 'jhon@example.com',
    passwordHash: 'hash',
    birthDate: new Date('2001-09-21'),
    height: 171,
  };

  usersService.createUser.mockResolvedValue(user);

  const result = await usersController.createUser(user);

  expect(result).toEqual(user);
  expect(usersService.createUser).toHaveBeenCalledTimes(1);
  expect(usersService.createUser).toHaveBeenCalledWith(user);
});

it('deve buscar os usuários', async () => {
  const users: User[] = [
    {
      id: 1,
      name: 'Jhon',
      email: 'jhon@example.com',
      passwordHash: 'hash',
      birthDate: new Date('2001-09-21'),
      height: 171,
    },
    {
      id: 2,
      name: 'yasmin',
      email: 'yasmin@example.com',
      passwordHash: 'hash',
      birthDate: new Date('2000-03-15'),
      height: 165,
    },
  ];

  usersService.getUsers.mockResolvedValue(users);

  const result = await usersController.getUsers();

  expect(result).toEqual(users);
  expect(usersService.getUsers).toHaveBeenCalledTimes(1);
});