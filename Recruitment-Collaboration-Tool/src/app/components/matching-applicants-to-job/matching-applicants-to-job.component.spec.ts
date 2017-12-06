import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingApplicantsToJobComponent } from './matching-applicants-to-job.component';

describe('MatchingApplicantsToJobComponent', () => {
  let component: MatchingApplicantsToJobComponent;
  let fixture: ComponentFixture<MatchingApplicantsToJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchingApplicantsToJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingApplicantsToJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
