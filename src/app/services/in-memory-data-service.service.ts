import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { ContactDetails } from '../dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService implements InMemoryDbService {

  constructor() { }
  createDb() {
    let contact = [
      new ContactDetails(1, "SAfder", "+919860335406", "siddiquisafder@gmail.com"),
      new ContactDetails(2, "SAM", "+919860335406", "siddiquisafder@gmail.com"),
      new ContactDetails(3, "John", "+919860335406", "siddiquisafder@gmail.com"),
      new ContactDetails(4, "Paul", "+919860335406", "siddiquisafder@gmail.com")
    ];
    return {contact};
  }


  genId(contact: ContactDetails[]): number {
    return contact.length > 0 ? Math.max(...contact.map(hero => hero.id)) + 1 : 4;
  }
}
