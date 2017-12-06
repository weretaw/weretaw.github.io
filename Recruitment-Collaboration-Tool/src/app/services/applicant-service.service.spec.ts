import { TestBed, inject } from '@angular/core/testing';

import { ApplicantServiceService } from './applicant-service.service';

describe('ApplicantServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicantServiceService]
    });
  });

  it('should be created', inject([ApplicantServiceService], (service: ApplicantServiceService) => {
    expect(service).toBeTruthy();
  }));
});
