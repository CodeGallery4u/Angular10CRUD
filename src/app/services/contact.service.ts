import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactDetails } from '../dashboard/dashboard.component';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InMemoryDataServiceService } from './in-memory-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {



  constructor(private httpClient: HttpClient) { }


  getCustomers(): Observable<ContactDetails[]>{
    let url = `${environment.baseUrl}contact`
    return this.httpClient.get<ContactDetails[]>(url).pipe(
      catchError(this.handleError<ContactDetails[]>('getContacts', []))
    );
  }

  AddCustomer(contactDetails: ContactDetails){
    let url = `${environment.baseUrl}contact`
    return this.httpClient.post<ContactDetails>(url, contactDetails).pipe(
      catchError(this.handleError<ContactDetails[]>('addContact', []))
    );
  }

  getCusomterById(id: number): Observable<ContactDetails>{
    let url = `${environment.baseUrl}contact/${id}`
    return this.httpClient.get<ContactDetails>(url).pipe(
      catchError(this.handleError<ContactDetails>('getCusomterById', undefined))
    );
  }

  deleteContact(id: number){
    let url = `${environment.baseUrl}contact/${id}`
    return this.httpClient.delete<ContactDetails>(url).pipe(
      catchError(this.handleError<ContactDetails[]>('addContact', []))
    );
  }

  updateContact(contactDetails: ContactDetails){
    let url = `${environment.baseUrl}contact`
    return this.httpClient.post<ContactDetails>(url, contactDetails).pipe(
      catchError(this.handleError<ContactDetails[]>('addContact', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
