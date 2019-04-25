import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilerDetallesBookingComponent } from './alquiler-detalles-booking.component';

describe('AlquilerDetallesBookingComponent', () => {
  let component: AlquilerDetallesBookingComponent;
  let fixture: ComponentFixture<AlquilerDetallesBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquilerDetallesBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquilerDetallesBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
