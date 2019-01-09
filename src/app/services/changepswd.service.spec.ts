import { TestBed } from '@angular/core/testing';

import { ChangepswdService } from './changepswd.service';

describe('ChangepswdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangepswdService = TestBed.get(ChangepswdService);
    expect(service).toBeTruthy();
  });
});
