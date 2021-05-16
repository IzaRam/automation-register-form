import { Component, OnInit } from '@angular/core';

import { UsersService } from './users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

	users: any = [];

	constructor(private usersService: UsersService) {}

	ngOnInit() {
		this.usersService.getPersons().subscribe(persons => {
				this.users = persons;
		});
	}

}
