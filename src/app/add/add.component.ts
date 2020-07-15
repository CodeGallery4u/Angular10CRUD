import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactDetails } from '../dashboard/dashboard.component';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  contactForm = new FormGroup({
    Name: new FormControl("", [this.NameValidator.bind(this)]),
    ContactNo: new FormControl("", [this.ContactValidator.bind(this)]),
    Email: new FormControl("", [this.EmailValidator.bind(this)])
  })

  NameValidator(formControl: FormControl){
    if(!formControl.value){
      return { 'error': 'Required.'}
    }
  }

  ContactValidator(formControl: FormControl){
    if(!formControl.value){
      return { 'error': 'Required.'}
    }

  }

  EmailValidator(formControl: FormControl){
    if(!formControl.value){
      return { 'error': 'Required.'}
    }

  }

  OnAddContact(){
    if(this.contactForm.invalid)
    return

     let contact: ContactDetails = new ContactDetails( undefined, this.contactForm.controls.Name.value, this.contactForm.controls.ContactNo.value
      , this.contactForm.controls.Email.value)

     this.contactService.AddCustomer(contact).subscribe((response)=>{
       this.router.navigate(["/Dashboard"])
     })
  }

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
  }

}
