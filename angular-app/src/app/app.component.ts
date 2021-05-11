import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	yearsBirthList: number[] = [];

	monthsBirthList: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	daysBirthList: number[] = [];

	ngOnInit() {
		this.generateYearsOfBirth();
		this.generateDaysOfBirth();
	}

	generateYearsOfBirth() {
		let date = new Date();
		let currentYear = date.getFullYear();
		for (let i = currentYear; i >= 1900; i--) {
			this.yearsBirthList.push(i);
		}
	}

	generateDaysOfBirth() {
		for(let i = 0; i < 32; i++) {
			this.daysBirthList.push(i);
		}
	}

}

