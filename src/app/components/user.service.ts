import { User } from './../models/user.model';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  userUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {
   }
   registerUser(user: User) {
    return  this.http.post(this.userUrl, user);
  }
  checkUser(identification: number) {
    return this.http.get(this.userUrl + '/' + identification);
  }
}
