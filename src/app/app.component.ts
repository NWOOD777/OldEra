import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController, private router: Router) {}

  registro() {
    this.menu.close();
    this.router.navigate(['/registro']);
  }

  login() {
    this.menu.close();
    this.router.navigate(['/login']);
  }

  taller() {
    this.menu.close();
    this.router.navigate(['/taller']);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}