import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = "http://localhost:8080/api/v1/person/";

  constructor(private http: HttpClient) { }

  getPersons () {
	return this.http.get(this.apiUrl + "all");
  }

}
