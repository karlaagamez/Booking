import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarAlquilerComponent } from './gestionar-alquiler.component';

describe('GestionarAlquilerComponent', () => {
  let component: GestionarAlquilerComponent;
  let fixture: ComponentFixture<GestionarAlquilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarAlquilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
