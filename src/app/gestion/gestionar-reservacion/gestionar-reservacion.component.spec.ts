import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarReservacionComponent } from './gestionar-reservacion.component';

describe('GestionarReservacionComponent', () => {
  let component: GestionarReservacionComponent;
  let fixture: ComponentFixture<GestionarReservacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarReservacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarReservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
