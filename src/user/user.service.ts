import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      username: 'user1',
      email: 'user1@gmail.com',
      password: 'admin',
      age: 25,
    },
    {
      username: 'user2',
      email: 'user2@gmail.com',
      password: 'admin',
      age: 25,
    },
    {
      username: 'user3',
      email: 'user3@gmail.com',
      password: 'admin',
      age: 25,
    },
    {
      username: 'user4',
      email: 'user4@gmail.com',
      password: 'admin',
      age: 25,
    },
  ];

  getUserByName(username: string): User {
    return this.users.find((user) => user.username === username);
  }

  
}
