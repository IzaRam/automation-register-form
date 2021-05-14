import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Register } from './register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  apiUrl = "http://localhost:8080/api/v1/person/";

  getPersons () {
	return this.http.get(this.apiUrl + "all");
  }

  addPerson(person: Register) {
	this.http.post(this.apiUrl + "add", person).subscribe(person => {
		console.log(person);
	});
  }
}
