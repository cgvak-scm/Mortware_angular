import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthendicationService } from '../authendication.service';
import { NgEventBus } from 'ng-event-bus';
import { GridDataResult, PageChangeEvent, RowArgs } from '@progress/kendo-angular-grid';
import { NgxSpinnerService } from "ngx-spinner";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  styles: [
 `
   kendo-treeview {
     width: 200px;
   }
 `,
],
})

export class DashboardComponent implements OnInit,AfterViewInit {

  // public variable declaration
  public pageSize: number = 100;
  public skip: number = 0;
  public mySelection: string[] = [];
  private items:any ;
  gridData:any;
  Contractees:any;
  Events:any;
  Transactions:any;
  Lot:any;
  isAtneeds:boolean=true;
  isPreneeds:boolean=true;
  showDetails:any;
  main_title:any;
  firstName: string ="";
  birthDate:any;
  age:any;
  phone:any;
  address:any;
  director:any;
  package:any;
  dispositonLocation:any;
  dispositonDate:any;
  deathDate:any;
  caseNotes:any;
  deathLocation:any;

  
  public DisplayList: Array<string> = [];

  public listItems1: Array<string> = [
   'Recent Cases',
   'UnInvoiced Financial Items',
   'Unpaid Cases',
   'Paid in Full',
   'Open Trust',
   'API Atneeds',
   'Used Preneeds',
   'All Atneeds',
];

public listItemsPN: Array<string> = [
  'Recent Preneeds',
  'UnInvoiced Financial Items',
  'Unpaid Cases',
  'Paid in Full',
  'Open Trust',
  'API Preneeds',
  'Unused Preneeds',
  'Used Preneeds',
  'All Preneeds',
  'Cancelled Preneeds'
];

 


public pagesizelist:Array<number>=[
  10,
  20,
  30,
  40,
  50,
  100
]
public selectedValue = '';
public addValue = 'Add';
public editValue = 'Edit';
public selectedSizeValue=100;
public homeid:any;
public keyvalue:any;
public url =environment;
//end

  constructor(  private authenticationService: AuthendicationService,private eventbus:NgEventBus, private spinner: NgxSpinnerService ) {
    }

  ngOnInit(): void {
    this.resetfieldvalue();
    //this.loadScript();
  }

  ngAfterViewInit(): void {
    this.eventbus.on('callgrid').subscribe((meta: any) => {
      this.isAtneeds=true;
      //this.loadScript();
      let data =JSON.parse(meta.data);
      if(data==""){
        this.isAtneeds=false;
        return
      }
      else{
        debugger
      this.selectedValue="";
      this.homeid=data.homeId;
      this.keyvalue=data.key;
      this.main_title=data.parentName;
      this.gridData=null;


      if(this.keyvalue == "PN"){
        this.DisplayList=this.listItemsPN;
      }
      else
      {
        this.DisplayList=this.listItems1;
      }
      
      }
    });
  }
  //Main Grid function
  private getGridData(data:any){
    
    if(data==""){
      this.isAtneeds=false;
      this.gridData=null;
    }
    else{
    this.authenticationService.gridData(data,this.selectedValue,1)
    .subscribe({
        next: (response: any) => {
       this.gridData=response;
       this.items=response;
      }
      });
    }
  }
  // Grid Row Click Event Call
  gridUserSelectionChange(gridUser:any, selection:any) 
    {
      const selectedData = selection.selectedRows[0].dataItem;
      console.log(selectedData);
     
      var codeId=selection.selectedRows[0].dataItem.codeId;
      var contactsId=selection.selectedRows[0].dataItem.contactsId;

      //resetgrid 
      this.resetGridValue();

      //call Contractees grid data 
      this.Contracteesgrid(codeId);

      //callShowDashBoardARTransactions
      this.ShowARTransactions(codeId);

      //call ShowDashBoardEvents
      this.ShowEvents(codeId);

      //call lot information 
      this.ShowLotInformation(codeId,contactsId);
    
      //load case info
      this.authenticationService.showCaseInfo(codeId,contactsId)
      .subscribe({
      next:(response:any)=>{
      this.showDetails=response;
      //resetdata
  
    this.resetfieldvalue();
    //bind value 
    this.firstName=this.showDetails.fullName;
    this.birthDate=this.showDetails.birthDate;
    this.age=this.showDetails.age;
    this.phone=this.showDetails.phone;
    this.address=this.showDetails.address;
    this.director=this.showDetails.director;
    this.package=this.showDetails.package;
    this.dispositonLocation=this.showDetails.dispositonLocation;
    this.dispositonDate=this.showDetails.dispositonDate;
    this.deathDate=this.showDetails.deathDate;
    this.caseNotes=this.showDetails.caseNotes;
    this.deathLocation =this.showDetails.deathLocation;
  }
})
  }
//Reset show details form data 
  resetfieldvalue(){
    this.firstName="";
    this.birthDate="";
    this.age="";
    this.phone="";
    this.address="";
    this.director="";
    this.package="";
    this.dispositonLocation="";
    this.dispositonDate="";
    this.deathDate="";
    this.caseNotes="";
    this.deathLocation="";
  
  }
//Pagination Data 
  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
  }
//Display change event 
handleDisplayChange(data:any){
  this.gridData=null;
  if(data.length>0)
  {
    this.spinner.show();
  this.authenticationService.gridData(this.keyvalue,data,this.homeid)
  .subscribe({
      next: (response: any) => {
        this.spinner.hide();
     this.gridData=response;
    }
    });
  }
 }
// Show Details Function's
Contracteesgrid(codeId:number){
  this.authenticationService.gridContractees(codeId)
  .subscribe({
    next:(response:any)=>{
    this.Contractees=response;
    }
  });
  }
  ShowARTransactions(codeId:number){
    this.authenticationService.gridARTransactions(codeId)
    .subscribe({
      next:(response:any)=>{
      this.Transactions=response;
      }
    });
  }
  ShowEvents(codeId:number){
    this.authenticationService.gridEvents(codeId)
    .subscribe({
      next:(response:any)=>{
      this.Events=response;
      }
    });
  }
  ShowLotInformation(codeId:number,contactsId:number){
    this.authenticationService.gridLotInformation(codeId,contactsId)
    .subscribe({
      next:(response:any)=>{
      this.Lot=response;
      }
    });
  }

  //Rset Grid
  resetGridValue(){
    this.Events=null;
    this.Transactions=null;
    this.Contractees=null
  }

  handleCategoryChange(value:any) {
    this.pageSize=value;
  }
  // public loadScript() {
  //   let node = document.createElement("script");
  //   node.src = this.url;
  //   node.type = "text/javascript";
  //   node.async = true;
  // }

}
  

