import { describe, it, expect, beforeEach } from 'vitest';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  it('deve criar o UsersService', () => {
    expect(usersService).toBeDefined();
  });

  it('deve retornar uma lista de usuários', () => {
    const users = usersService.getUsers();

    expect(Array.isArray(users)).toBe(true);
  });

  it('deve retornar 3 usuários', () => {
    const users = usersService.getUsers();

    expect(users).toHaveLength(3);
  });

it('deve retornar os dados esperados do primeiro usuário', () => {
  const users = usersService.getUsers();

  expect(users[0]).toEqual({
    id: 1,
    name: 'Jhon',
    email: 'jhon@example.com',
  });
});

});