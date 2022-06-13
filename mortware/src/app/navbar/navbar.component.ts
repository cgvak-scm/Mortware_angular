import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu: any[] = [
    {
      text: 'Home',
      icon:"bi bi-house-door custom-nav-icon",
      cssClass:"custom"
  },
{
  text: 'Setup',
  icon:"bi bi-gear-wide-connected custom-nav-icon",
  items: [{ text: 'User Defined Documents' },{ text: 'DesignerFolders and Cards' },{ text: 'Quick Entries' },{ text: 'Field Invisibility' },{ text: 'Services\Visitation' },{ text: 'Task Setup' },{ text: 'User Maintenance' }
  ,{ text: 'Document\Image Storage' },{ text: 'Setup'}],
  cssClass:"custom"
}, {
  text: 'Tools',
  icon:"bi bi-tools custom-nav-icon",
  items: [{ text: 'Accounting Export' }, { text: 'Address Book' }, { text: 'Backup' }, { text: 'Collections Manager' }, { text: 'Commission Manager' }
  , { text: 'CRM' }, { text: 'E-File' }, { text: 'Export' }, { text: 'Import' }, { text: 'Intrest Manager' }
  , { text: 'Mail Merge' }, { text: 'Scheduler' }, { text: 'Trust Manager' }, { text: 'Task supervisor' }, { text: 'GPL Updater' }
  , { text: 'Universal Exporter' }, { text: 'General Ledger Accounts' }], cssClass:"custom"
},
{
  text: 'Forms',
  icon:"bi bi-file-earmark-text custom-nav-icon",
  items: [
    { text: 'State Forms',items: [{ text: 'California-Certificate of Death' }, { text: 'Florida-Certificate of Death' }, { text: 'Georgia- Certificate of Death (Rev.2009-09)' }
    , { text: 'Iowa-Certificate of Death (Rev.2011-01)' }, { text: 'New York - Certificate of Death ' }] },
    { text: 'Federal Forms',items:[{text:'Social Security Form(Rev.2008-08)'},{text:'Veterans Affairs- Application for Burial Benefits(Rev.2017-04)'},{text:'Veterans Affairs- Claim for Governmnet Medallion(Rev.2017-04)'},{text:'Veterans Affairs- Headstone marker(Rev.2017-12)'},{text:'Veterans Affairs- Presidential Memorial Certificate Request Form '}] },
    { text: 'Financial Forms',items:[{text:'Invoice'},{text:'Payment Distribution'},{text:'Prepaid Ledger Sheet'}] },
    { text: 'Funeral Home Forms' },
    { text: 'Cemetery Forms',url: "http://localhost:4200/Masters/company/" },
    { text: 'General Forms',items:[{text:'Interview Worksheet'},{text:'Service Day Arrangements'}] },
    { text: 'Atneed Contract' },
    { text: 'Preneed Contract' },
    { text: 'User Defined Documents ' },
    { text: 'Envelope' },
    { text: 'Designer Folders Documents',
    items:[
      {text:'Acknowledgments',items:[{text:'sfb'},{text:'tent'},{text:'test'},{text:'Test Card2'},{text:'test2'}]}
    ,{text:'Bookmarks',items:[{text:'4 per page'},{text:'Footprints'},{text:'Footprints2'}]}
    ,{text:'Memorial Program',items:[{text:'BiFold Card'},{text:'ChristianBiFold'},{text:'Memory Folder'},{text:'MemoryCard'},{text:'test'},{text:'Yortzite Reminder Form'}]}
    ,{text:'Prayer Cards'},{text:'Service Folders'},
    {text:'Register Books',items:[{text:'Clergy Record'},{text:'Register 2'},{text:'RegisterPage1'},{text:'RegisterPage2'},{text:'RegisterPage3'}]},
    {text:'Others',items:[{text:'Deceased Card'},{text:'Memorial'},{text:'Other Memory '},{text:'ptest'}]} ]},
    { text: 'Commission Forms' },
    { text: 'Other Forms' },
    { text: 'Print List ' },
    { text: 'Save as PDF', items:[{text:'Bergen Temp'},{text:'CAD Forms test'}]},
  {text:'Email Batch '}], cssClass:"custom"
},


{
  text: 'Reports',
  icon:"bi bi-clipboard-data custom-nav-icon",
  items: [{ text: 'General Report',items:[{text:'Funeral Listing'},{text:'Current Funerals Report'},{text:'Case Schedule'},{text:'Body Preperation Report'},{test:'GPL Listing Report'},{test:'Contact Report'},{test:'DFC Prayer Report'},{test:'Service Schedule Report'}] }, 
  { text: 'Financial Report',items:[{text:'Outtanding Receivables'},{text:'Aged Recevables'},{text:'AR Transactions'},{text:'Write Off Report'},{text:'Sales Report By Decedant'}
  ,{text:'Sales Tax Report'},{text:'Income Statement'},{text:'Charge Sales Report'},{text:'Insurance Report'},{text:'PreArrangement Report'},{text:'Sales Report by Item'},
  {text:'Payment Transaction Report'},{text:'Preneed Insurance and Trust List'},{text:'Payment Schedule AR report'},{text:'Scheduled Payments Report'},{text:'Payment Schedule Balance Comparision Report'},{text:'Uninvoiced Line Itmes Report'},{text:'AR Transactions Detail'},{text:'AR Contractee Transactions'}]},
   { text: 'Trust Report',items:[{text:'Trust Transaction'},{text:'Trust List'},{text:'Trust Details'},{text:'Trust Value'},{text:'Trust Breakdown Report'}
  ,{text:'North Carolina Trust Report'},{text:'Closed Trust Report'},{text:'Trust Current Value Report'},{text:'Trust List of New Prearrangements'}]},
    { text: 'Inventory Report'}, { text: 'Accounting Export Reports',items:[{text:'Export Error Report'},{text:'UnTransferred Transaction Report'},{text:'Transferred Transactions Report'}]}
  , { text: 'Commission Reports',items:[{text:'Commision Breakdown Report'},{text:'Commision Tracker Report'},{text:'Commision Details Report'},{text:'Supercisor Commision Report'}]}, 
  { text: 'Administrative Reports',items:[{text:'Print Log Report'},{text:'Task Report'},{text:'Case Task Report'},{text:'Accountability Report'}]}, { text: 'Custom Reports'}, { text: 'Mangement Reports'}, { text: 'Report Generator'}], cssClass:"custom"
}, 
{
  text: 'Services',
  icon:"bi bi-gear custom-nav-icon",
  items: [{ text: 'Start Automated Sevices'}],
  cssClass:"custom"
},
{
  text: 'Help',
  icon:"bi bi-question-circle custom-nav-icon",
  items: [{ text: 'About' }, { text: 'Check for Updates'},{ text: 'Activate Licence Registration' }, { text: 'Help'}], 
  cssClass:"custom"
},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}





