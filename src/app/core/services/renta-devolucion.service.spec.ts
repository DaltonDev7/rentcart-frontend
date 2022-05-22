import { TestBed } from '@angular/core/testing';

import { RentaDevolucionService } from './renta-devolucion.service';

describe('RentaDevolucionService', () => {
  let service: RentaDevolucionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentaDevolucionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
