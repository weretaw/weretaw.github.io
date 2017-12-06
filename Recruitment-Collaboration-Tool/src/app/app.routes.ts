import { Routes } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddNewJobComponent } from './components/add-new-job/add-new-job.component';
import { ApplicantDetailComponent } from './components/applicant-detail/applicant-detail.component';
import { JobDetailComponent } from "./components/job-detail/job-detail.component";
import { EditJobComponent } from './components/edit-job/edit-job.component';
import { EditApplicantComponent } from './components/edit-applicant/edit-applicant.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { MatchingApplicantsToJobComponent } from './components/matching-applicants-to-job/matching-applicants-to-job.component';
import { MatchingJobsToApplicantComponent } from './components/matching-jobs-to-applicant/matching-jobs-to-applicant.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'jobs', component: JobsComponent, canActivate: [AuthGuard] },
    { path: 'applicant-detail', component: ApplicantDetailComponent, canActivate: [AuthGuard] },
    { path: 'applicant', component: ApplicantComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'matching-applicants-to-job', component: MatchingApplicantsToJobComponent, canActivate: [AuthGuard]  },
    // { path: 'edit-job', component: EditJobComponent, canActivate: [AuthGuard]  },
    { path: 'edit-job', component: EditJobComponent, canActivate: [AuthGuard] },
    { path: 'edit-applicant', component: EditApplicantComponent, canActivate: [AuthGuard] },
    { path: 'job-detail', component: JobDetailComponent, canActivate: [AuthGuard] },
    { path: 'add-job', component: AddNewJobComponent, canActivate: [AuthGuard] },
    { path: 'app-matching-jobs-to-applicant', component: MatchingJobsToApplicantComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/404' }
];