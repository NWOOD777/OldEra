import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariosInscritosPage } from './usuarios-inscritos.page';

describe('UsuariosInscritosPage', () => {
  let component: UsuariosInscritosPage;
  let fixture: ComponentFixture<UsuariosInscritosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosInscritosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
