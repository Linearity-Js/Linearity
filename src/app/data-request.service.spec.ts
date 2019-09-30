import { TestBed } from '@angular/core/testing';

import { DataRequestService } from './data-request.service';

describe('DataRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataRequestService = TestBed.get(DataRequestService);
    expect(service).toBeTruthy();
  });
});
