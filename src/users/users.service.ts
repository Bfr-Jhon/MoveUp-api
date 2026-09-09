import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
   getUsers(): object[] {
  return [
  {
    "id": 1,
    "name": "Jhon",
    "email": "jhon@example.com"
  },
  {
    "id": 2,
    "name": "yasmin",
    "email": "yasmin@example.com"
  },
  {
    "id": 3,
    "name": "Carlos",
    "email": "carlos@example.com"
  }
];
}
}

