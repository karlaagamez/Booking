import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilerCrearComponent } from './alquiler-crear.component';

describe('AlquilerCrearComponent', () => {
  let component: AlquilerCrearComponent;
  let fixture: ComponentFixture<AlquilerCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquilerCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquilerCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
