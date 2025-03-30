import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  showRegister: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService){
    this.loginForm = formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    })
  }

  login(){
    if(this.loginForm.invalid) return;
    this.authService.loginWithEmail(this.email?.value, this.password?.value)
      .then(() => console.log("Login exitoso"))
      .catch(err => console.log(err));
  }


  toggleRegister(){
    this.showRegister = !this.showRegister;
  }

  get email() { return this.loginForm.get("email")};

  get password() {return this.loginForm.get("password")};
}
