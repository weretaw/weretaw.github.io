import { TestBed, inject } from '@angular/core/testing';

import { SkillsetServiceService } from './skillset-service.service';

describe('SkillsetServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillsetServiceService]
    });
  });

  it('should be created', inject([SkillsetServiceService], (service: SkillsetServiceService) => {
    expect(service).toBeTruthy();
  }));
});
