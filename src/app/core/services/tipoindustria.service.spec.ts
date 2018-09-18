import { TestBed } from '@angular/core/testing';

import { TipoindustriaService } from './tipoindustria.service';

describe('TipoindustriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoindustriaService = TestBed.get(TipoindustriaService);
    expect(service).toBeTruthy();
  });
});
