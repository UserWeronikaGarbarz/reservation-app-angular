import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataComponent } from './data/data.component';
import { AdminComponent } from './admin/admin.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { StartPageComponent } from './start-page/start-page.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { ReservationsComponent } from './admin/reservations/reservations.component';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { PictureComponent } from './picture/picture.component';
import { IconsComponent } from './icons/icons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartPageComponent,
    DataComponent,
    AdminComponent,
    AccountComponent,
    LoginComponent,
    ReservationsComponent,
    SidenavComponent,
    PictureComponent,
    IconsComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
