import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Job } from '../../model/job';
import { JobsServiceService } from '../../services/jobs-service.service';
import { Applicant } from '../../model/applicant';
import { DataServiceService } from '../../services/data-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matching-jobs-to-applicant',
  templateUrl: './matching-jobs-to-applicant.component.html',
  styleUrls: ['./matching-jobs-to-applicant.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MatchingJobsToApplicantComponent implements OnInit {

  arAllJobs: Job[] = new Array();
  arRelevantRecruite: any[] = [];
  arRecruiteEmail: any[] = [];
  subscriptionJob: any;
  arNotArchivedJobs: Job[] = [];
  applicantSkill: string[] = [];

  hideEmailbutton:boolean=true;
  messageOfNotMatching:string="";

  constructor(public jobService: JobsServiceService,
    public dataService: DataServiceService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.messageOfNotMatching="";
    this.subscriptionJob = this.jobService.getJobs().subscribe(jobs => {
      this.arNotArchivedJobs = jobs.filter(job => {
        return job.IsArcheive != true
      })
    });
  }

  ngOnDestroy() {
    this.subscriptionJob.unsubscribe();
  }

  emailSend(){
   this.hideEmailbutton=false;
  }
  
  UpdatingRecruiterRelevantApplicant() {
    this.applicantSkill = this.dataService.MatchingApplicant.Skills;
    let SkillExsist: boolean;
    this.arNotArchivedJobs.forEach(job => {
      SkillExsist = true;
      let i;
      for (i = 0; i < this.applicantSkill.length; i++) {
        if (!job.Skills.includes(this.applicantSkill[i])) {
          SkillExsist = false;
          break;
        }
      }
      if (SkillExsist) {
        this.dataService.RecuterManagers.filter(recuter => {
          if (recuter.Name == job.RecruitingManager)
            if (!this.arRelevantRecruite.includes(recuter)) {
              this.arRelevantRecruite.push(recuter);
              this.arRecruiteEmail.push(recuter.Email);
            }
        })
      }
    });

    if(this.arRecruiteEmail==null){
      this.hideEmailbutton=false;
      this.messageOfNotMatching="No suitable positions were found for the candidate";
    }
  }

}
