export class Address{
    houseNo: number;
    street: String;
    area: String;
    pin: number;

    constructor(houseNo: number, street: String, area: String, pin: number){
        this.houseNo = houseNo;
        this.street = street;
        this.area = area;
        this.pin = pin;
    }
}