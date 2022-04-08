import { Component, OnInit } from '@angular/core';
import { AuthendicationService } from '../authendication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
data:any;
title = 'mortware';


public expandedKeys: any[] = ['0', '1'];

public checkedKeys: any[] = ['0_1'];
  constructor(  private authenticationService: AuthendicationService,) { }

  ngOnInit(): void {
    this.getAtneedsList();
  }

  private getAtneedsList(){
    debugger
    this.authenticationService.menuData(12)
        .subscribe({
            next: (response: any) => {
            this.data=response;
          }
          });
  }

}
