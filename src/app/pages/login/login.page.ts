import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  isRecurrentUser: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Verificar si el usuario es recurrente
    const user = localStorage.getItem('currentUser');
    this.isRecurrentUser = !!user;
  }

  login() {
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
        alert('Correo electrónico o contraseña incorrectos.');
      }
    } else {
      alert('Por favor, ingresa tu correo electrónico y contraseña.');
    }
  }
}