import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewApplicantComponent } from './add-new-applicant.component';

describe('AddNewApplicantComponent', () => {
  let component: AddNewApplicantComponent;
  let fixture: ComponentFixture<AddNewApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
