import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password-reset-password',
  templateUrl: './forget-password-reset-password.component.html',
  styleUrls: ['./forget-password-reset-password.component.css']
})
export class ForgetPasswordResetPasswordComponent implements OnInit {
  error: string;

  constructor() { 
    this.error = "NoneType' object has no attribute 'replace'";
  }

  ngOnInit(): void {
  }

}