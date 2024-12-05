import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios-inscritos',
  templateUrl: './usuarios-inscritos.page.html',
  styleUrls: ['./usuarios-inscritos.page.scss'],
})
export class UsuariosInscritosPage implements OnInit {
  usuarios: any[] = [];
  tallerNombre: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.tallerNombre = params['tallerNombre'];
      this.cargarUsuariosInscritos();
    });
  }

  cargarUsuariosInscritos() {
    const talleresGuardados = localStorage.getItem('talleres');
    if (talleresGuardados) {
      const talleres = JSON.parse(talleresGuardados);
      const taller = talleres.find((t: any) => t.nombre === this.tallerNombre);
      if (taller) {
        this.usuarios = taller.inscritos;
      }
    }
  }
}