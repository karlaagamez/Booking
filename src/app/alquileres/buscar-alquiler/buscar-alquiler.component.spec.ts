import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAlquilerComponent } from './buscar-alquiler.component';

describe('BuscarAlquilerComponent', () => {
  let component: BuscarAlquilerComponent;
  let fixture: ComponentFixture<BuscarAlquilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarAlquilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
