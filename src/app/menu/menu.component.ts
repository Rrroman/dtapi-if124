import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @ViewChild('sideNav') public sideNav!: ElementRef;

  public openMenu() {
    const isMenuOpened =
      this.sideNav.nativeElement.classList.contains('menu-hidden');
    if (isMenuOpened) {
      this.sideNav.nativeElement.classList.remove('menu-hidden');
    } else {
      this.sideNav.nativeElement.classList.add('menu-hidden');
    }
  }
}
