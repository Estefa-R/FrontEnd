import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialMercanciaComponent } from './historial-mercancia.component';

describe('HistorialMercanciaComponent', () => {
  let component: HistorialMercanciaComponent;
  let fixture: ComponentFixture<HistorialMercanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialMercanciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialMercanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
