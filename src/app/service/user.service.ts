import { Injectable, signal } from '@angular/core';

export interface User {
  name: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  private users = signal<User[]>([]);

  public getUsers(): User[] {
    return this.users();
  }

  public addUser(user: User) {
    // this.users.update(state => {
    //   state.push(user);
    //   return state;
    // });

    this.users.mutate(state => state.push(user));
  }
}
