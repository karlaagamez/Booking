import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlquileresItemComponent } from './lista-alquileres-item.component';

describe('ListaAlquileresItemComponent', () => {
  let component: ListaAlquileresItemComponent;
  let fixture: ComponentFixture<ListaAlquileresItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAlquileresItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAlquileresItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
