import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { PopupModule } from "@progress/kendo-angular-popup";
import { NavigationComponent } from './Shared/navigation/navigation.component';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuModule } from '@progress/kendo-angular-menu';
import {  RouterModule } from '@angular/router';
import { TimelineComponent } from './dashboard/components/timeline/timeline.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { TemplateComponent } from './template/template.component';
import { DashboardTopbarComponent } from './dashboard/components/dashboard-topbar/dashboard-topbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    DashboardComponent,
    TimelineComponent,
    TemplateComponent,
    DashboardTopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputsModule,
    PopupModule ,
    NavigationModule,
    MenuModule,
    RouterModule,
    DropDownsModule,
    ButtonsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
