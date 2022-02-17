import { TestBed } from '@angular/core/testing';

import { RegistroValidatorService } from './registro-validator.service';

describe('RegistroValidatorService', () => {
  let service: RegistroValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
