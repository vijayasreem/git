import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signUp(): void {
    try {
      if (this.validateForm()) {
        // Sign up code
      }
    } catch (err) {
      console.log(err)
    }
  }

  validateForm(): boolean {
    // Validation code
    return true;
  }
}