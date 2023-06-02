import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordResetPasswordComponent } from './forget-password-reset-password/forget-password-reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    ForgetPasswordResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
