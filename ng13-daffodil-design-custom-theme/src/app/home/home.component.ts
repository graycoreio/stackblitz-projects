import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isLight = true;

  @HostBinding('class.daff-theme-light') get lightThemeClass() {
    return this.isLight;
  }

  @HostBinding('class.daff-theme-dark') get darkThemeClass() {
    return !this.isLight;
  }

  onClick() {
    this.isLight = !this.isLight;
  }
}
