import { TestBed } from '@angular/core/testing';

import { CritriaService } from './critria.service';

describe('CritriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CritriaService = TestBed.get(CritriaService);
    expect(service).toBeTruthy();
  });
});
