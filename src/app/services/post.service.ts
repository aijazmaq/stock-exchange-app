import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { company } from '../Models/company';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) { }
  private apiURL = "https://jsonplaceholder.typicode.com";
  private sessionCompanyKey: string = "Company"

  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public saveCompany(requestData: company): Observable<any> {
    console.log(requestData);
    return this.httpClient.post<any>(this.apiURL + '/saveCompany/', requestData, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  public getAllCompany(): Observable<company[]> {
    let cached: any;

    //if cache avialble  reutrn the value from here
    if (cached = sessionStorage.getItem(this.sessionCompanyKey)) {
      return of(JSON.parse(cached) as company[])
    }
    // get the value from the api and store it in session and returnt he value to the caller
    // this.httpClient.get<company>(this.apiURL + '/Getall/')
    //   .pipe(
    //     catchError(this.errorHandler)
    //   ).subscribe(
    //     x => {
    //       sessionStorage.setItem(this.sessionCompanyKey, JSON.stringify(x))
    //     }
    //   )
  
    // for testing purpose
    of([new company("Company1", "C01", "Palash", 1000000, "https//google.com","BSE"),
    new company("Company2", "C02", "Palash", 1000000, "https//google.com","BSE"),
    new company("Company3", "C03", "Palash", 1000000, "https//google.com","BSE")])
      .subscribe(
        x => {
          sessionStorage.setItem(this.sessionCompanyKey, JSON.stringify(x))
        }
      )

    cached = sessionStorage.getItem(this.sessionCompanyKey)
    return of(JSON.parse(cached) as company[])
  }

  public saveStock(requestStockData: any): Observable<any> {
    return this.httpClient.post<any>(this.apiURL + '/saveStock/', requestStockData, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }



}
