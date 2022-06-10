import { Injectable } from '@angular/core';
import { HttpClient ,  HttpErrorResponse} from '@angular/common/http';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
 
import { Observable , throwError } from 'rxjs';
import {catchError, map} from  'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ICompanyModel } from '../Models/company.model';



@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  
  url:string="";

  constructor(private http: HttpClient) { 
    this.url=environment.environment;
  }

  public getallcompanys():Observable<ICompanyModel[]>{
      debugger
      return this.http.get<any>(`${environment.environment}Company/GetAllCompanys`)
      .pipe(map(response => {
        return response;
      }));
    }

   

    public save(request: ICompanyModel, isAddOrUpdate: boolean): any {
      debugger
 
      return this.http.post<any>(`${environment.environment}Company/Save`, request)
        .pipe(map(response => {
          return response;
        }));
    }

  

    private handleError(error: HttpErrorResponse) {
      let errormsg:string='';
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }
      // Return an observable with a user-facing error message.
      errormsg += 'Something bad happened; please try again later.';
      return throwError(errormsg);
    }
}


