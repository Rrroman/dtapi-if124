import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public form: FormGroup;

  public constructor(private authService: AuthService) {
    this.form = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
    });
  }

  public login() {
    this.authService.login(this.form.value.login, this.form.value.password);
  }
}
