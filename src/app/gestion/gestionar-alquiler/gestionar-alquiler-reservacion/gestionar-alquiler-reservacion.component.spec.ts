import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarAlquilerReservacionComponent } from './gestionar-alquiler-reservacion.component';

describe('GestionarAlquilerReservacionComponent', () => {
  let component: GestionarAlquilerReservacionComponent;
  let fixture: ComponentFixture<GestionarAlquilerReservacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarAlquilerReservacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarAlquilerReservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
