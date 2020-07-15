import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ContactDetails: ContactDetails[] = [];
  SearchValue: string;

  constructor(private contactService: ContactService) {

  }



  ngOnInit(): void {

    this.contactService.getCustomers().subscribe((response : ContactDetails[])=>{
      console.log(response)
      this.ContactDetails = response;
    })
  }


  SearchChanges(val: string) {
    this.ContactDetails.forEach(element => {
      if (val) {
        (element.name.toLowerCase().includes(val.toLowerCase()) || element.email.toLowerCase().includes(val.toLowerCase())
          || element.contactNo.toLowerCase().includes(val.toLowerCase())) ? element.Visibility = true : element.Visibility = false;
      }
      else {
        element.Visibility = true;
      }
    });
  }
}


export class ContactDetails {
  id: number
  name: String
  contactNo: string
  email: string

  constructor(id: number, name: string, contactNo: string, email: string) {
    this.id = id;
    this.name = name;
    this.contactNo = contactNo;
    this.email = email
  }

  // UI behaviour
  Visibility: boolean = true

}
