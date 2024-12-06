import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  email: string = '';
  nombre: string = '';
  apellido: string = '';
  rut: string = '';
  fechaNacimiento: string = '';
  genero: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router,private alertController: AlertController) {}

  ngOnInit() {}

  async register() {
    if (this.email.trim() && this.password.trim() && this.password === this.confirmPassword) {
      const newUser = {
        email: this.email,
        nombre: this.nombre,
        apellido: this.apellido,
        rut: this.rut,
        fechaNacimiento: this.fechaNacimiento,
        genero: this.genero,
        password: this.password
      };

      // Guardar el usuario en localStorage
      localStorage.setItem('user', JSON.stringify(newUser));
      const alert = await this.alertController.create({
        header: ' Inicio de sesión',
        message: 'Porfavor, ingrese su correo electrónico y contraseña.',
        buttons: ['OK']
      });
      await alert.present();
      this.router.navigate(['/login']);
    } else {
      const alert = await this.alertController.create({
        header: 'Inscripción',
        message: 'Te has inscrito exitosamente en el taller.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}