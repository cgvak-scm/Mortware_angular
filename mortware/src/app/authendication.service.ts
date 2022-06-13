import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

const API_URL = environment;
@Injectable({
  providedIn: 'root'
})
export class AuthendicationService {
url:string="";
  constructor( private router: Router,
    private http: HttpClient) {
      this.url=environment.environment;
     }

     /**
     * Logins authentication service
     * @param username 
     * @param password 
     * @param companyId 
     * @returns  
     */
      login(username: string, password: string) {
        return this.http.post<any>(`${this.url}Auth/authenticate`, 
        { userName: username, password })
            .pipe(map(reponseLogin=> {
                    return reponseLogin; 
                
            }));
    }
      menuData(UserId: number): any {
      return this.http.get<any>(`${this.url}Main/getExplorer?UserId=` + UserId)
        .pipe(map(response => {
          return response;
        }));
    }
    gridData(flag:string,search:string,HomeId: number): any {
      debugger
      return this.http.get<any>(`${this.url}Main/GetMainDisplayList?flag=` + flag+'&search='+search+'&HomeId='+HomeId)
        .pipe(map(response => {
          return response;
        }));
    }
    showCaseInfo(codeId:number,contactsId:number){
      return this.http.get<any>(`${this.url}Main/ShowCaseInfo?codeId=`+codeId+'&contactsId='+contactsId)
        .pipe(map(response => {
          return response;
        }));
    }
    gridContractees(codeId: number): any {
      return this.http.get<any>(`${this.url}Main/ShowContractees?codeId=` + codeId)
        .pipe(map(response => {
          return response;
        }));
    }
    gridARTransactions(codeId: number): any {
      return this.http.get<any>(`${this.url}Main/ShowARTransactions?codeId=` + codeId)
        .pipe(map(response => {
          return response;
        }));
    }
    gridEvents(codeId: number): any {
      return this.http.get<any>(`${this.url}Main/ShowEvents?codeId=` + codeId)
        .pipe(map(response => {
          return response;
        }));
    }
    gridLotInformation(codeId: number,contactsId:number): any {
      return this.http.get<any>(`${this.url}Main/ShowLotInformation?codeId=`+codeId+'&contactsId='+contactsId)
        .pipe(map(response => {
          return response;
        }));
    }
}


