import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtService } from '../../services/jwt.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup


    constructor(
      private service : JwtService,
      private fb: FormBuilder
    ){}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {validator: this.passwordMathValidator})
  }


  passwordMathValidator(formGroup: FormGroup){
    const password = formGroup.get('password')?.value;
    const confirmPassword= formGroup.get('confirmPassword')?.value;

    if(password != confirmPassword){
      formGroup.get('confirmPassword')?.setErrors({passwordMisamtch : true});
    }else
    {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }
  submitForm() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value); // Inspect the payload
      const payload = {
        nom: this.registerForm.get('name')?.value,
        mail: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value
      };
      this.service.register(payload).subscribe(
        (response) => {
          console.log(response);
          console.log("Registration successful");
        },
        (error) => {
          console.error('Error:', error); // Add error handling
        }
      );
    } else {
      console.log("Form is invalid");
    }
  }

}
