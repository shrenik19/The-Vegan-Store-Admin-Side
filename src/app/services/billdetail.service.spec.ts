import { TestBed } from '@angular/core/testing';

import { BilldetailService } from './billdetail.service';

describe('BilldetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BilldetailService = TestBed.get(BilldetailService);
    expect(service).toBeTruthy();
  });
});
