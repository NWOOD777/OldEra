import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit() {}

  register() {
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
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      this.router.navigate(['/login']);
    } else {
      alert('Por favor, completa todos los campos y asegúrate de que las contraseñas coincidan.');
    }
  }
}