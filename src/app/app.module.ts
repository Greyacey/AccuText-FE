import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AcctextService} from './acctext.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { HomePgComponent } from './home-pg/home-pg.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePgComponent, 
    HistoryComponent, 
    LoginComponent, 
    IndexComponent, 
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AcctextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
