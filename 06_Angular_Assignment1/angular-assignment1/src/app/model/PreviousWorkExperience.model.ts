export class PreviousWorkExperience{
    hireDate: Date;
    endDate: Date;
    employeer: String;

    constructor(hireDate: Date, endDate: Date, employeer: String){
        this.hireDate = hireDate;
        this.endDate = endDate;
        this.employeer = employeer;
    }
}