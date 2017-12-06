import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingJobsToApplicantComponent } from './matching-jobs-to-applicant.component';

describe('MatchingJobsToApplicantComponent', () => {
  let component: MatchingJobsToApplicantComponent;
  let fixture: ComponentFixture<MatchingJobsToApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchingJobsToApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingJobsToApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
