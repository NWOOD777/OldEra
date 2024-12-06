import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';	

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  isRecurrentUser: boolean = false;

  constructor(private router: Router, private alertController: AlertController ) {}

  ngOnInit() {
    // Verificar si el usuario es recurrente
    const user = localStorage.getItem('currentUser');
    this.isRecurrentUser = !!user;
  }

  async login() {
    if (this.email.trim() && this.password.trim()) {
      const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

      if (storedUser.email === this.email && storedUser.password === this.password) {
        localStorage.setItem('currentUser', JSON.stringify(storedUser));

        if (this.isRecurrentUser) {
          alert('¡Bienvenido de nuevo, usuario recurrente!');
        } else {
          alert('¡Bienvenido por primera vez!');
        }

        this.router.navigate(['/home']);
      } else {
        const alert = await this.alertController.create({
          header: ' Inicio de sesión',
          message: 'Correo electrónico o contraseña incorrectos.',
          buttons: ['OK']
        });
        await alert.present();
      }
    } else {
      const alert = await this.alertController.create({
        header: ' Inicio de sesión',
        message: 'Porfavor, ingrese su correo electrónico y contraseña.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}