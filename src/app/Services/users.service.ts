import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateAccount } from '../Models/CreateAccount';
import { JwtResponse } from '../Models/JwtResponse';
import { Role } from '../Models/Role';
import { User } from '../Models/User';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  addUserURL = "http://localhost:9091/SpringMVC/servlet/add-user";
  ajoutUserURL = "http://localhost:9091/SpringMVC/servlet/ajouter-user";
  deleteUserURL = "http://localhost:9091/SpringMVC/servlet/delete-user/{user-id}";
  updateUserURL = "http://localhost:9091/SpringMVC/servlet/update-user";
  getAllUserURL = "http://localhost:9091/SpringMVC/servlet/retrieve-all-user";
  getByIdUserURL = "http://localhost:9091/SpringMVC/servlet/retrieve-user-by-id";
  getByUsernameUserURL = "http://localhost:9091/SpringMVC/servlet/retrieve-user-by-username";
  getByEmailUserURL = "http://localhost:9091/SpringMVC/servlet/retrieve-user-by-email";
  getByRoleUserURL = "http://localhost:9091/SpringMVC/servlet/retrieve-user-by-role";
  constructor(private userhttp: HttpClient, private router: Router) {
  }

  addUser(createaccount: CreateAccount) {
    return this.userhttp.post<JwtResponse>(this.addUserURL, createaccount, httpOptions)
      .pipe(data => {
      return data;
    });
  }

  ajouterUser(user: User): Observable<any> {
    return this.userhttp.post<JwtResponse>(this.ajoutUserURL, user).pipe(data => {
      return data;
    })
  }

  deleteUser(idUser: number): Observable<any> {
    return this.userhttp.delete(this.deleteUserURL, { responseType: 'text' });
  }

  updateUser(id: number, value: any): Observable<any> {
    return this.userhttp.put(this.updateUserURL, value);
  }

  getAllUser(): Observable<any> {
    return this.userhttp.get(this.getAllUserURL);
  }

  getByIdUser(id: number): Observable<any> {
    return this.userhttp.get(this.getByIdUserURL);
  }

  getByUsernameUser(username: string): Observable<any> {
    return this.userhttp.get(this.getByUsernameUserURL);
  }

  getByEmailUser(email: string): Observable<any> {
    return this.userhttp.get(this.getByEmailUserURL);
  }

}
