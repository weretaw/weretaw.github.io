import { TestBed, inject } from '@angular/core/testing';

import { ApplicantHistoryService } from './applicant-history.service';

describe('ApplicantHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicantHistoryService]
    });
  });

  it('should be created', inject([ApplicantHistoryService], (service: ApplicantHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
