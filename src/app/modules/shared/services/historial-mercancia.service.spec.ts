import { TestBed } from '@angular/core/testing';

import { HistorialMercanciaService } from './historial-mercancia.service';

describe('HistorialMercanciaService', () => {
  let service: HistorialMercanciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialMercanciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
