import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private coreAPI = environment.coreAPI;

  constructor(
    private _http: HttpClient,
  ) { }

  getUsers() {
    return this._http.get(`${this.coreAPI}/users`);
  }
}
