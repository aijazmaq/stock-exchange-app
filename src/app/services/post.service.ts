import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) { }
  public saveCompany(requestData: any): Observable<any> {
    const url = 'https://reqres.in/api/users';
    return this.httpClient.post<any>(url, requestData);
  }
  
}
