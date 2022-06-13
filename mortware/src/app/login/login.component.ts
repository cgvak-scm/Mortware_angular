import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthendicationService } from '../authendication.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public username:any;
  public password:any;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,private http: HttpClient,
    private toastr: ToastrService,
    //     private modalService: NgbModal,
        private authenticationService: AuthendicationService,
       // private spinner: NgxSpinnerService,
  ) {

   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberme: [false]
  });
  }
// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

  onSubmit(){
    this.authenticationService.login(this.username,
        this.password)
        .subscribe({
            next: response => {
              if(response.succeeded){
                this.router.navigate(['/dashboard']);
              }
            else{
              this.toastr.error( response.message,'Error');
            }
          }
          });
        }
        restData(){
          //
         this.username="";
         this.password="";
        }
  }


