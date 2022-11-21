import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarMercanciaComponent } from './actualizar-mercancia.component';

describe('ActualizarMercanciaComponent', () => {
  let component: ActualizarMercanciaComponent;
  let fixture: ComponentFixture<ActualizarMercanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarMercanciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarMercanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
