export class AboutMe {
    firstName: String;
    lastName: String;
    employeeId: number;
    email: String;

    constructor(firstName: String, lastName: String, employeeId: number, email: String){
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeId = employeeId;
        this.email = email;
    }
}