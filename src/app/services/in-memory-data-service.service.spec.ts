import { TestBed } from '@angular/core/testing';

import { InMemoryDataServiceService } from './in-memory-data-service.service';

describe('InMemoryDataServiceService', () => {
  let service: InMemoryDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
