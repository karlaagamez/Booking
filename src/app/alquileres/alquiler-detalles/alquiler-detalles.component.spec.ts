import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilerDetallesComponent } from './alquiler-detalles.component';

describe('AlquilerDetallesComponent', () => {
  let component: AlquilerDetallesComponent;
  let fixture: ComponentFixture<AlquilerDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquilerDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquilerDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
