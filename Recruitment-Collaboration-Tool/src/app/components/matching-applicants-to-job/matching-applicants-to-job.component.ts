import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';

import { DataServiceService } from '../../services/data-service.service';
import { ApplicantService } from '../../services/applicant-service.service';
import { Applicant } from "../../model/Applicant";
import { Job } from "../../model/job";


@Component({
  selector: 'app-matching-applicants-to-job',
  templateUrl: './matching-applicants-to-job.component.html',
  styleUrls: ['./matching-applicants-to-job.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MatchingApplicantsToJobComponent implements OnInit {

  arrApplicantsMatching: Applicant[] = [];
  arAllApplicants: Applicant[] = [];
  jobSkils: string[] = [];
  subscriptionApplicants: any;
  arrIsAmpty:boolean;

  constructor(public dataService: DataServiceService,
    public applicantService: ApplicantService) { }

  ngOnInit() {
    this.subscriptionApplicants = this.applicantService.getApplicants().subscribe(applicant => {
      this.arAllApplicants = applicant;
      console.log(this.arAllApplicants);
      let index;
      this.arAllApplicants.forEach(applicant => {
        let pushAllApplicant = true;
        for (index = 0; index < this.dataService.MatchingJob.Skills.length; index++) {
          if (!applicant.Skills.includes(this.dataService.MatchingJob.Skills[index])) {
            pushAllApplicant = false;
            break;
          }
        }
        if (pushAllApplicant) {
          this.arrApplicantsMatching.push(applicant);
          console.log(this.arrApplicantsMatching);
        }
      });
    });
  }

  ngOnDestroy() {
    this.subscriptionApplicants.unsubscribe();
  }
}