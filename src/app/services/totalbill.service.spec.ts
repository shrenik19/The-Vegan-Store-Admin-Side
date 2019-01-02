import { TestBed } from '@angular/core/testing';

import { TotalbillService } from './totalbill.service';

describe('TotalbillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TotalbillService = TestBed.get(TotalbillService);
    expect(service).toBeTruthy();
  });
});
