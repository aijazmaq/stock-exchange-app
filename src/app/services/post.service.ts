import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { company } from '../Models/company';
import { stock } from '../Models/stock';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) { }
  private apiURL = "https://apigatewayocelot.azurewebsites.net/";
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
    return this.httpClient.post<any>(this.apiURL + 'api/v1.0/market/company/register', requestData, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  public getAllCompany(): Observable<company[]> {
    let cached: any;

    //if cache avialble  reutrn the value from here
    // if (cached = sessionStorage.getItem(this.sessionCompanyKey)) {
    //   return of(JSON.parse(cached) as company[])
    // }

    return this.httpClient.get<company[]>(this.apiURL + 'api/v1.0/market/company/getall')
      .pipe(
        catchError(this.errorHandler)
      )
      // .pipe(
      //   tap(
      //     m=>  sessionStorage.setItem(this.sessionCompanyKey, JSON.stringify(m))
      //   )
      // )
      // ;
    
  }
 
  private getAll(): Observable<company>{
     // get the value from the api and store it in session and returnt he value to the caller
     return this.httpClient.get<company>(this.apiURL + 'api/v1.0/market/company/getall')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  public saveStock(requestStockData: stock): Observable<any> {

     let data = {
      "companyCode": "PAL",
      "stockPrice": 0
    }
    return this.httpClient.post<any>(this.apiURL + 'api/v1.0/market/stock/add', data, this.httpOptions)
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
