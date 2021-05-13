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

	statesList: string[] = ["ALABAMA","ALASKA","AMERICAN SAMOA","ARIZONA","ARKANSAS","CALIFORNIA","COLORADO","CONNECTICUT","DELAWARE","DISTRICT OF COLUMBIA","FLORIDA","GEORGIA","GUAM","HAWAII","IDAHO","ILLINOIS","INDIANA","IOWA","KANSAS","KENTUCKY","LOUISIANA","MAINE","MARYLAND","MASSACHUSETTS","MICHIGAN","MINNESOTA","MISSISSIPPI","MISSOURI","MONTANA","NEBRASKA","NEVADA","NEW HAMPSHIRE","NEW JERSEY","NEW MEXICO","NEW YORK","NORTH CAROLINA","NORTH DAKOTA","NORTHERN MARIANA","OHIO","OKLAHOMA","OREGON","PENNSYLVANIA","PUERTO RICO","RHODE ISLAND","SOUTH CAROLINA","SOUTH DAKOTA","TENNESSEE","TEXAS","UTAH","VERMONT","VIRGINIA","VIRGIN ISLANDS","WASHINGTON","WEST VIRGINIA","WISCONSIN","WYOMING"];

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
		for(let i = 1; i < 32; i++) {
			this.daysBirthList.push(i);
		}
	}

}

