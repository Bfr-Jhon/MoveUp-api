import { beforeEach, describe, expect, it, vi } from 'vitest';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

describe('UsersService', () => {
  let usersService: UsersService;

  const userRepository = {
    find: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();

    usersService = new UsersService(userRepository as any);
  });

  it('deve criar o UsersService', () => {
    expect(usersService).toBeDefined();
  });

  it('deve buscar os usuários no repository', async () => {
    const users: User[] = [
      {
        id: 1,
        name: 'Jhon',
        email: 'jhon@example.com',
        passwordHash: 'hash',
        birthDate: new Date('2001-09-21'),
        height: 171,
      },
    ];

    userRepository.find.mockResolvedValue(users);

    const result = await usersService.getUsers();

    expect(result).toEqual(users);
    expect(userRepository.find).toHaveBeenCalledTimes(1);
  });

  it('deve retornar uma lista vazia quando não existem usuários', async () => {
    userRepository.find.mockResolvedValue([]);

    const result = await usersService.getUsers();

    expect(result).toEqual([]);
    expect(userRepository.find).toHaveBeenCalledTimes(1);
  });
});