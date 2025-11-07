import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  private usersList = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ];

  constructor() { }

  getAllUsers(): any[] {
    return this.usersList;
  }

  findUserById(id: number): any {
    return this.usersList.find(user => user.id === id);
  }

  createUser(userData: any): any {
    const newUser = {
      id: this.usersList.length + 1,
      ...userData
    };
    this.usersList.push(newUser);
    return newUser;
  }
}
