import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Applicant } from '../model/Applicant';
import { ApplicantStatus } from '../model/Applicant-Status';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ApplicantStatusService {
  applicantDocm: AngularFirestoreDocument<ApplicantStatus>;
  applicantStatusCollection: AngularFirestoreCollection<ApplicantStatus>;
  applicantsStatus: Observable<ApplicantStatus[]>;
  constructor(private fs: AngularFirestore, private auth: AngularFireAuth) {
    this.applicantStatusCollection = this.fs.collection('ApplicantStatus');
    this.applicantsStatus = this.applicantStatusCollection.snapshotChanges().map(chages => {
      return chages.map(applicantStatus => {
        const applicantData = applicantStatus.payload.doc.data() as ApplicantStatus;
        applicantData.Id = applicantStatus.payload.doc.id;
        return applicantData;
      });
    });
  }
  lockApplicant(applicantStatusAdd: ApplicantStatus) {
    this.applicantStatusCollection.add(applicantStatusAdd);
  }

  updeteApplicantsStatus(applicantStatusUpdate: ApplicantStatus) {
    this.applicantDocm = this.fs.doc(`ApplicantStatus/${applicantStatusUpdate.Id}`);
     this.applicantDocm.update(applicantStatusUpdate);
  }
  getApplicantStatus() {
    return this.applicantsStatus;
  }
  deleteApplicantsStatus(ApplicantIdToDelete: any) {
    this.applicantDocm = this.fs.doc(`ApplicantStatus/${ApplicantIdToDelete}`);
    this.applicantDocm.delete();
  }
}