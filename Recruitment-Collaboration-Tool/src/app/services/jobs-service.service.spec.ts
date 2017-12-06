import { TestBed, inject } from '@angular/core/testing';

import { JobsServiceService } from './jobs-service.service';

describe('JobsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobsServiceService]
    });
  });

  it('should be created', inject([JobsServiceService], (service: JobsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
