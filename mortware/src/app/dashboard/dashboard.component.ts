import { Component, OnInit } from '@angular/core';
import { AuthendicationService } from '../authendication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
//   template:
//   `

// `,
styles: [
 `
   kendo-treeview {
     width: 200px;
   }
 `,
],
})
export class DashboardComponent implements OnInit {
  public pageSize: number = 10;
  public skip: number = 0;
  public mySelection: string[] = [];
  gridData:any;

  constructor(  private authenticationService: AuthendicationService,) { }

  ngOnInit(): void {
    this.getGridData();
  }
  private getGridData(){
    this.authenticationService.gridData(1)
    .subscribe({
        next: (response: any) => {
          debugger
       this.gridData=response;
      }
      });
      //this.dataBinding.skip = 0;
    }
  
  }


