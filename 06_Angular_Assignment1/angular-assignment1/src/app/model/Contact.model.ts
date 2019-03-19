export class Contact{
    emergencyContact: number;
    mobile: number;
    landLine: number;
    email: String;

    constructor(emergencyContact: number, mobile: number, landLine: number, email: String){
        this.emergencyContact = emergencyContact;
        this.mobile = mobile;
        this.landLine = landLine;
        this.email = email;
    }
}