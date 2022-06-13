import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { TreeViewModule } from "@progress/kendo-angular-treeview";
import { NgEventBus } from 'ng-event-bus';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { MenusModule } from '@progress/kendo-angular-menu';
import { NgxSpinnerModule } from "ngx-spinner";
import { AppInitServiceService } from './app-init-service.service';
import { CompanyComponent } from './Masters/company/company.component';
 
 

 

export function init_app(appLoadService: AppInitServiceService) {
  return () => appLoadService.init();
}

@NgModule({
  declarations: [
     
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    CompanyComponent 
  ],
  imports: [
   
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    GridModule,
    TreeViewModule,
    InputsModule, LabelModule,DropDownsModule,MenusModule,NgxSpinnerModule
  ],
  providers: [NgEventBus, AppInitServiceService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppInitServiceService],
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
