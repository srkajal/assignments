export class Assignment{
    customerId: number;
    customerName: String;
    startDate: Date;
    endDate: Date;
    location: String;

    constructor(customerId: number, customerName: String, startDate: Date, endDate: Date, location: String){
        this.customerId =customerId;
        this.customerName = customerName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
    }
}