import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CONSTANTS } from 'src/constants';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      username: 'user1',
      email: 'user1@gmail.com',
      password: 'admin',
      age: 25,
      role: CONSTANTS.ROLES.ANDROID_DEVELOPER,
    },
    {
      username: 'user2',
      email: 'user2@gmail.com',
      password: 'admin',
      age: 35,
      role: CONSTANTS.ROLES.WEB_DEVELOPER,
    },
    {
      username: 'user3',
      email: 'user3@gmail.com',
      password: 'admin',
      age: 22,
      role: CONSTANTS.ROLES.ANDROID_DEVELOPER,
    },
    {
      username: 'user4',
      email: 'user4@gmail.com',
      password: 'admin',
      age: 20,
      role: CONSTANTS.ROLES.WEB_DEVELOPER,
    }, 
  ];

  getUserByName(username: string): User {
    return this.users.find((user) => user.username === username);
  }
}
