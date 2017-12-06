import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routes';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgForm } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filters-pipes/filter-jobs.pipe';

// components
import { AppComponent } from './app.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { HomeComponent } from './components/home/home.component';
import { AddNewApplicantComponent } from './components/add-new-applicant/add-new-applicant.component';
import { LoginComponent } from './components/login/login.component';
import { AddNewJobComponent } from './components/add-new-job/add-new-job.component';
import { EditJobComponent } from './components/edit-job/edit-job.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { JobDetailComponent } from "./components/job-detail/job-detail.component";
import { EditApplicantComponent } from './components/edit-applicant/edit-applicant.component';
import { MatchingApplicantsToJobComponent } from './components/matching-applicants-to-job/matching-applicants-to-job.component';

//Services
import { LoginServiceService } from "./services/login-service.service";
import { JobsServiceService } from "./services/jobs-service.service";
import { ApplicantService } from "./services/applicant-service.service";
import { DataServiceService } from "./services/data-service.service";
import { SkillsetServiceService } from "./services/skillset-service.service";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { UploadFileService } from './services/upload-file.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from "angularfire2/auth";
import { ApplicantDetailComponent } from './components/applicant-detail/applicant-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import {enableProdMode} from '@angular/core';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ApplicantStatusService } from './services/applicant-status.service';
import { ApplicantHistoryService } from './services/applicant-history.service';
import { MatchingJobsToApplicantComponent } from './components/matching-jobs-to-applicant/matching-jobs-to-applicant.component';


@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    ApplicantComponent,
    HomeComponent,
    AddNewApplicantComponent,
    LoginComponent,
    AddNewJobComponent,
    ApplicantDetailComponent,
    SideNavbarComponent,
    FilterPipe,
    JobDetailComponent,
    EditJobComponent,
    MatchingApplicantsToJobComponent,
    EditApplicantComponent,
    MatchingJobsToApplicantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'Recruitment-Collaboration'),
    AngularFirestoreModule,
    FormsModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    NgxPaginationModule,
    PdfViewerModule
  ],
  providers: [
    ApplicantHistoryService,
    LoginServiceService,
    JobsServiceService,
    ApplicantService,
    SkillsetServiceService,
    DataServiceService,
    AngularFireDatabase,
    AngularFireAuth,
    UploadFileService,
    AuthService,
    AuthGuardService,
    ApplicantStatusService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
