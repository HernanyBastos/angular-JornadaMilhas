import { TestBed } from '@angular/core/testing';

import { FormBuscarService } from './form-buscar.service';

describe('FormBuscarService', () => {
  let service: FormBuscarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormBuscarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
