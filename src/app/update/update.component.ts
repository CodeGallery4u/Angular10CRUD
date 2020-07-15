import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactDetails } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


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

  selectedContact: ContactDetails;

  constructor(private contactService: ContactService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.contactService.getCusomterById(this.activatedRoute.snapshot.params['id']).subscribe((response: ContactDetails)=>{
      this.selectedContact = response
      console.log(this.selectedContact)

      this.contactForm.controls.Name.setValue(this.selectedContact.name)
      this.contactForm.controls.ContactNo.setValue(this.selectedContact.email)
      this.contactForm.controls.Email.setValue(this.selectedContact.contactNo)
    })
  }

  OnUpdate(){
    this.selectedContact.name = this.contactForm.controls.Name.value
    this.selectedContact.contactNo = this.contactForm.controls.ContactNo.value
    this.selectedContact.email =  this.contactForm.controls.Email.value
    this.contactService.updateContact(this.selectedContact).subscribe(()=>{
      this.router.navigate(["Dashboard"])
    })

  }
}
