import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoachesComponent } from './signup/coaches/coaches.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './signup/users/users.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoachesComponent,
    UsersComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
