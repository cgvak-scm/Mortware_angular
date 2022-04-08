import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthendicationService {

  constructor( private router: Router,
    private http: HttpClient) { }

     /**
     * Logins authentication service
     * @param username 
     * @param password 
     * @param companyId 
     * @returns  
     */
      login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}Auth/authenticate`, 
        { userName: username, password })
            .pipe(map(reponseLogin=> {
                debugger
                    return reponseLogin; 
                
            }));
    }

      menuData(UserId: number): any {
      return this.http.get<any>(`${environment.apiUrl}Dashboard/getTreeView?UserId=` + UserId)
        .pipe(map(response => {
          debugger
          return response;
        }));
    }

    gridData(UserId: number): any {
      return this.http.get<any>(`${environment.apiUrl}Dashboard/getDashboardGrid?UserId=` + UserId)
        .pipe(map(response => {
          debugger
          return response;
        }));
    }

   
}


