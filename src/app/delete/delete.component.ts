import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Router, RouterState, RouterLink, ActivatedRoute } from '@angular/router';
import { ContactDetails } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  selectedContactDetails

  constructor(private contactService: ContactService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.activateRoute.snapshot.params['id']
    this.contactService.getCusomterById(id).subscribe((response: ContactDetails)=>{
      console.log(response)
      this.selectedContactDetails = response;
    })
  }

  OnDeleteContactConfirm(){

    this.contactService.deleteContact(this.selectedContactDetails.id).subscribe((response)=>{
      console.log(response)
      this.router.navigate(['Dashboard'])
    })
  }

}
