import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataServiceService } from '../../services/data-service.service';
import { Applicant } from '../../model/applicant';
import { AngularFireAuth } from 'angularfire2/auth';
import { ApplicantStatusService } from '../../services/applicant-status.service';
import { ApplicantService } from '../../services/applicant-service.service';
import { debug } from 'util';
import { Window } from 'selenium-webdriver';
import { ApplicantHistory } from '../../model/Applicant-History';
import { ApplicantHistoryService } from '../../services/applicant-history.service';
import { StringIterator } from 'lodash';
import { ApplicantStatus } from '../../model/Applicant-Status';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ArrLockApplicantId: any[] = [];
  ArrLockApplicant: Applicant[] = [];
  ArrApplicantStatus: ApplicantStatus[] = [];
  FormInterviewSummary: boolean = true;
  Applicant: Applicant;
  ApplicantHistory: ApplicantHistory;
  subscribtionApplicantStatus: any;
  subscribtionArrLockAplicant: any;
  Positions: string[] = ["Pass", "Fail", "NA"];
  Status: string;
  InterviewSummary: string;
  ApplicantStatusId: any;


  constructor(public DataService: DataServiceService,
    private auth: AuthService, private FireAuth: AngularFireAuth,
    private ApplicantStatus: ApplicantStatusService,
    private Applicants: ApplicantService,
    private ApplicantsHistory: ApplicantHistoryService) {

  }
  ngOnInit() {
    this.subscribtionApplicantStatus = this.ApplicantStatus.getApplicantStatus().subscribe(res => {
      res.forEach(Status => {
        this.ArrApplicantStatus.push(Status);
        if (Status.MangerId == this.FireAuth.auth.currentUser.uid) {
          this.ArrLockApplicantId.push(Status.ApplicantId);
        }
      });
    });
    //Get ArrLockAplicant
    this.subscribtionArrLockAplicant = this.Applicants.getApplicants().subscribe(ArrApplicants => {
      ArrApplicants.forEach(Aplicant => {
        let i: number;
        for (i = 0; i < this.ArrLockApplicantId.length; i++) {
          if (this.ArrLockApplicantId[i] == Aplicant.Id) { this.ArrLockApplicant.push(Aplicant); break; }
        }
      })
    })
    console.log(this.ArrLockApplicant);
  }
  ngOnDestroy() {
    this.subscribtionApplicantStatus.unsubscribe();
    this.subscribtionArrLockAplicant.unsubscribe();
  }
  goToInterviewSummary(applicant: Applicant, index: number) {
    this.Applicant = applicant;
    this.FormInterviewSummary = false;
    this.ApplicantStatusId = index;
  }
  AddInterviewSummary() {
    this.ApplicantHistory = {
      ApplicantId: this.Applicant.Id,
      MangerId: this.FireAuth.auth.currentUser.uid,
      ReviewDate: new Date().toISOString().slice(0, 10),
      ManagerReview: this.InterviewSummary,
      Status: this.Status,
    }
    if (this.Status == "Fail" || this.Status == "NA") {
      debugger; // delete status 
      this.Applicant.IsActive = false;
      this.Applicants.updeteApplicants(this.Applicant);
      this.ArrLockApplicant.splice(this.ApplicantStatusId, 1);
      this.ArrApplicantStatus.filter(Status => {
        if (Status.ApplicantId == this.Applicant.Id) {
          this.ApplicantStatus.deleteApplicantsStatus(Status.Id);
        }
      });
    }
    else if (this.Status == "Pass") { }
    this.ApplicantsHistory.addNewApplicantHistory(this.ApplicantHistory);
    this.Status = ""; this.InterviewSummary = "";
    this.FormInterviewSummary = true;
  }
}
