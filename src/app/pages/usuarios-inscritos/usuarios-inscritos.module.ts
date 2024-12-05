import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosInscritosPageRoutingModule } from './usuarios-inscritos-routing.module';

import { UsuariosInscritosPage } from './usuarios-inscritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosInscritosPageRoutingModule
  ],
  declarations: [UsuariosInscritosPage]
})
export class UsuariosInscritosPageModule {}
