import { Component, OnInit, Output, EventEmitter, OnDestroy, OnChanges } from '@angular/core';
import { ApplicantService } from "../../services/applicant-service.service";
import { Applicant } from "../../model/Applicant";
import { DataServiceService } from "../../services/data-service.service";
import { Manger } from "../../model/manger";
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { ApplicantStatusService } from '../../services/applicant-status.service'
import { ApplicantStatus } from '../../model/Applicant-Status';
import { FilterPipe } from '../../filters-pipes//filter-jobs.pipe';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css'],
  providers: [AngularFireAuth]
})
export class ApplicantComponent implements OnChanges {
  SearchInput: string;
  arAllApplicants: Applicant[] = new Array();
  arApplicantStatus: Applicant[] = new Array();
  arUnlockApplicants: Applicant[] = new Array();
  manger: string;
  LockUnlock: boolean = false;
  addFormToggle: boolean = false;
  arStatus: ApplicantStatus[] = [];
  subscriptionApplicants: any;
  subscriptionStatus: any;

  constructor(public applicantService: ApplicantService,
    public dataService: DataServiceService,
    private auth: AngularFireAuth,
    private router: Router,
    public authService: AuthService,
    public statusService: ApplicantStatusService) { }
  ngOnChanges() {
    console.log(this.dataService.arSkillSetPicked);
  }
  ngOnInit() {

    this.subscriptionApplicants = this.applicantService.getApplicants().subscribe(applicant => {
      this.arAllApplicants = applicant;
      this.dataService.SearchBy = "Applicant Name";
    });

    this.subscriptionStatus = this.statusService.getApplicantStatus().subscribe(applicantStatus => {
      this.arStatus = applicantStatus;
    });

    // this.arAllApplicants.forEach(applicant => {
    //   this.arApplicantStatus.forEach(applicantStatus => {
    //   });
    // });

  }

  ngOnDestroy() {
    this.subscriptionApplicants.unsubscribe();
    this.subscriptionStatus.unsubscribe();
  }
  goToApplicantDetail(applicant: Applicant) {
    if (!applicant.IsActive) {
      this.dataService.applicantToEdit = applicant;
      this.router.navigate(['./applicant-detail']);
    } else if (this.lock(applicant)) {
      this.dataService.applicantToEdit = applicant;
      this.router.navigate(['./applicant-detail']);
    }
  }
  lock(applicant) {
    let isLockedByMe: boolean = false;
    let currentManagerId = this.auth.auth.currentUser.uid;
    if (currentManagerId != this.dataService.HR[0].Id || currentManagerId != this.dataService.HR[1].Id ) {
      this.arStatus.forEach(appli => {
        debugger
        if ((appli.ApplicantId == applicant.Id) && (appli.MangerId == currentManagerId)) {
          return isLockedByMe = true;
        }
      })
      return isLockedByMe;
    }
  }
}