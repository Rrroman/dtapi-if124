import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(private authService: AuthService ) {
    this.form = new FormGroup({
      login: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {

  }

  login() {
    this.authService.login(this.form.value.login, this.form.value.password)
  }

}
