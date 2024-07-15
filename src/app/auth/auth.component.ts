import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
  userForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(12)])
  })

  onSubmit() {    
    if(this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      this.userForm.reset();
      this.userForm.markAllAsTouched();
    }
  }
  constructor() {}
}
