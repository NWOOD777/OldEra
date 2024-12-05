import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-taller',
  templateUrl: './taller.page.html',
  styleUrls: ['./taller.page.scss'],
})
export class TallerPage implements OnInit {
  talleres = [
    {
      nombre: 'Taller de Pintura',
      descripcion: 'Aprende técnicas básicas de pintura.',
      fecha: '2024-01-15',
      hora: '10:00 AM',
      lugar: 'Centro Cultural',
      inscritos: []
    },
    {
      nombre: 'Taller de Yoga',
      descripcion: 'Sesiones de yoga para principiantes.',
      fecha: '2024-01-20',
      hora: '08:00 AM',
      lugar: 'Parque Central',
      inscritos: []
    },
  ];

  usuarioActual = JSON.parse(localStorage.getItem('currentUser') || '{}');

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.cargarTalleres();
  }

  cargarTalleres() {
    const talleresGuardados = localStorage.getItem('talleres');
    if (talleresGuardados) {
      this.talleres = JSON.parse(talleresGuardados);
    }
  }

  guardarTalleres() {
    localStorage.setItem('talleres', JSON.stringify(this.talleres));
  }

  async inscribirse(taller: any) {
    // Verificar si el usuario ya está inscrito
    const yaInscrito = taller.inscritos.some((usuario: any) => usuario.email === this.usuarioActual.email);

    if (yaInscrito) {
      const alert = await this.alertController.create({
        header: 'Inscripción',
        message: 'Ya estás inscrito en este taller.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      // Agregar al usuario a la lista de inscritos
      taller.inscritos.push(this.usuarioActual);

      // Guardar los cambios en localStorage
      this.guardarTalleres();

      // Mostrar alerta de confirmación
      const alert = await this.alertController.create({
        header: 'Inscripción',
        message: 'Te has inscrito exitosamente en el taller.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  verUsuarios(taller: any) {
    // Navegar a la página de usuarios inscritos con el nombre del taller como parámetro
    this.router.navigate(['/usuarios-inscritos'], { queryParams: { tallerNombre: taller.nombre } });
  }
}