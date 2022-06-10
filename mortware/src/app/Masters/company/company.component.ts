import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
//import { ICompany } from 'src/app/Models/Company';
import { ICompanyModel } from 'src/app/Models/company.model';
import { CompanyService } from 'src/app/_services/company.service';


 
 
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

 

export class CompanyComponent implements OnInit {
 
  public companyForm: FormGroup | any;
  public companys:ICompanyModel[] =[] as ICompanyModel[];
  public errormsg:string | undefined;

  //public company:ICompanyModel={} as ICompanyModel;

  public company:ICompanyModel | any;

  @Output() sendcompany=new EventEmitter();
  public isNew: boolean = true;


  constructor(private companyservice:CompanyService,private formBuilder: FormBuilder,) { 
  
  }

  ngOnInit(): void {
    //debugger


this.createForm();

    this.companyservice.getallcompanys().subscribe(( data)=>{
      this.companys=data;
    },(error)=>{
        console.log(error);
          this.errormsg=error;

        });

  }

  private createForm() {
    this.companyForm = this.formBuilder.group({
      companyId: 0,
      nameOfficial: '',
      nameShort: '',
      currency1: '',
      currency2: '',
      rateCur1toCur2: 0,
      phone: '',
      fax: '',
      email1: '',
      email2:'',
      mail: '',
      nodeKey:'',
      openImage: 0,
      closeImage: 0,
      website: '',
      controllingPerson: '',
      companyAddressId: 0,
      phone2: '',
      employerIdentificationNumber: ''
    });
}

private setFormData() {
  this.companyForm.patchValue({
    companyId: this.company.companyId,
    nameOfficial: this.company.nameOfficial,
    nameShort: this.company.nameShort,
    currency1: this.company.currency1,
    currency2: this.company.currency2,
    rateCur1toCur2: this.company.rateCur1toCur2,
    phone: this.company.phone,
    fax: this.company.fax,
    email1: this.company.email1,
    email2: this.company.email2,
    mail: this.company.mail,
    nodeKey: this.company.nodeKey,
    openImage: this.company.openImage,
    closeImage: this.company.closeImage,
    website: this.company.website,
    controllingPerson: this.company.controllingPerson,
    companyAddressId: this.company.companyAddressId,
    phone2: this.company.phone2,
    employerIdentificationNumber: this.company.employerIdentificationNumber
   
  });
}


      //methods
  public onSave(): void {
    debugger
    this.company=this.companyForm.value;
    this.companyservice.save(this.company,this.isNew).pipe(first()).subscribe({
      next: (response:any)=> {
        if (response.message.toLowerCase() == 'success') {
        }
      }

    });
  }




  


  public selectcompany(dataItem : ICompanyModel) {
    debugger;
     this.company = dataItem;
    this.setFormData();
  }

}
