import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
declare var window: any;
@Injectable({
  providedIn: 'root'
})
export class AppInitServiceService {

  public init() {
    return from(
        fetch('assets/app-config.json').then(function(response) {
          return response.json();
        })
      ).pipe(
        map((config) => {
        window.config = config;
        return 
      })).toPromise();
  }
}
