import { TestBed, inject } from '@angular/core/testing';

import { ApplicantStatusService } from './applicant-status.service';

describe('ApplicantStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicantStatusService]
    });
  });

  it('should be created', inject([ApplicantStatusService], (service: ApplicantStatusService) => {
    expect(service).toBeTruthy();
  }));
});
