export class Register {

	constructor(public gender: string, 
				public firstName: string, 
				public lastName: string, 
				public email: string, 
				public password: string, 
				public dateBirth: string, 
				public address: {
						addressMain: string, 
						addressCom: string, 
						city: string, 
						state: string, 
						postalCode: string, 
						country: string}) { }

}
