import { TestBed } from '@angular/core/testing';

import { ComparacaoService } from './comparacao.service';

describe('ComparacaoService', () => {
  let service: ComparacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComparacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
