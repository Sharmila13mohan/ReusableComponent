/*
inBuilt modules
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*
components and  modules
*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GetestimateComponent } from './getestimate/getestimate.component';
/*
ngBootstrap & primeNg
*/
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
/*
Reusable componenets
*/
import { AppInputComponent } from './core/app-input/app-input.component';
import { HeaderComponent } from './core/header/header.component';
import { TablesComponent } from './core/tables/tables.component';
import { AlertMessageComponent } from './core/alert-message/alert-message.component';
import { DropdownComponent } from './core/dropdown/dropdown.component';
import { ButtonComponent } from './core/button/button.component';
import { LoginComponent } from './core/login/login.component';
import { AlertboxComponent } from './core/alertbox/alertbox.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PaginatorComponent } from './core/paginator/paginator.component';


@NgModule({
  declarations: [
    AppComponent,
    AppInputComponent,
    HeaderComponent,
    TablesComponent,
    AlertMessageComponent,
    HomeComponent,
    DropdownComponent,
    GetestimateComponent,
    ButtonComponent,
    LoginComponent,
    AlertboxComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    PaginatorModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
