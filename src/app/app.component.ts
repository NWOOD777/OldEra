import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  home() {
    console.log('Home');
  }

  perfil() {
    console.log('Perfil');
  }
}
