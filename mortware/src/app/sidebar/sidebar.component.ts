import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit, ViewChild } from '@angular/core';
import { AuthendicationService } from '../authendication.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NgEventBus } from 'ng-event-bus';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
const is = (fileName: string, ext: string) => new RegExp(`.${ext}\$`).test(fileName);
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
 
data=[];
title = 'mortware';
public keys: string[] = [];
public expandedKeys: any[] = ['0','1','0_0','0_1','0_2','0_0_0','0_0_1','0_0_2'];
public url =environment;
public checkedKeys: any[] = ['0_1'];
  constructor(  private authenticationService: AuthendicationService, private eventbus:NgEventBus ) { }

  ngOnInit(): void {
    this.getAtneedsList();
    //this.loadScript();
  }
  ngAfterViewInit(): void {
    //this.loadScript();

  }
  private getAtneedsList(){
    this.authenticationService.menuData(12)
        .subscribe({
            next: (response: any) => {
            this.data=response;
          }
          });
  }

public dataclick(dataItem:any){
  debugger
  if(dataItem!=null)
  {
  if(dataItem.text=="Atneeds" || dataItem.text=="Preneeds"){
   var data=dataItem.homeId;
   this.eventbus.cast("callgrid",JSON.stringify(dataItem));
  }
  
  else{
    this.eventbus.cast("callgrid",JSON.stringify(""));
  }
}
else{
  this.eventbus.cast("callgrid",JSON.stringify(""));
}
}
// public isExpanded = (dataItem: any, index: string) => {
//   return this.keys.indexOf(index) > -1;
// };

// public handleExpand(node:any) {
//   this.keys = this.keys.concat(node.index);
// }
// /**
//      * A `collapse` event handler that will remove the node hierarchical index
//      * from the collection, collapsing its children.
//      */
//  public handleCollapse(node:any) {
//   this.keys = this.keys.filter(k => k !== node.index);
// }
public hasChildren = (item: any) => item.items && item.items.length > 0;
public fetchChildren = (item: any) => of(item.items);

// public loadScript() {
//   let node = document.createElement("script");
//   node.src = this.url;
//   node.type = "text/javascript";
//   node.async = true;
// }
}
