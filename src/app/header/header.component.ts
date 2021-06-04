import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public constructor(private route: Router) {}

  public logout(): void {
    localStorage.removeItem('authToken');
    this.route.navigate(['/login']);
  }
}
