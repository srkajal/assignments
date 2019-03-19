import { Component, OnInit } from '@angular/core';
import { Address } from '../model/Address.model';
import { Contact } from '../model/Contact.model';

@Component({
  selector: 'app-personal-biography',
  templateUrl: './personal-biography.component.html',
  styleUrls: ['./personal-biography.component.css']
})
export class PersonalBiographyComponent implements OnInit {
  addresss: Address;
  contact: Contact;
  constructor() { 
    this.addresss = new Address(123, "24th Main", "BTM", 123456);
    this.contact = new Contact(9876543210, 1234567890, 80123456, "abc@def.com");
  }

  ngOnInit() {
  }

}
