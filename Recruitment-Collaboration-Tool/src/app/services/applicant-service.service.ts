import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Applicant } from '../model/Applicant';
import { ApplicantStatus } from '../model/Applicant-Status';
import { ApplicantHistory } from '../model/Applicant-History';
import { DataServiceService } from './data-service.service';


@Injectable()
export class ApplicantService {

  applicantDocm: AngularFirestoreDocument<Applicant>;
  applicanCollection: AngularFirestoreCollection<Applicant>;
  applicants: Observable<Applicant[]>;
  applicantsStatus: Observable<Applicant[]>;
  applicantsHistory: Observable<Applicant[]>;


  constructor(public fs: AngularFirestore, public DataService: DataServiceService) {

    this.applicanCollection = this.fs.collection('Applicants');

    this.applicants = this.applicanCollection.snapshotChanges().map(chages => {
      return chages.map(applicant => {
        const applicantData = applicant.payload.doc.data() as Applicant;
        applicantData.Id = applicant.payload.doc.id as any;
        return applicantData;
      })
    });
    this.applicantsStatus = this.fs.collection('ApplicantStatus').valueChanges();
    this.applicantsHistory = this.fs.collection('ApplicantHistory').valueChanges();
  }

  getApplicants() {
    return this.applicants;
  }

  addNewApplicant(newApplicant: Applicant) {
    this.applicanCollection.add(newApplicant);
  }

  updeteApplicants(updeteApplicant: Applicant) {
   this.applicantDocm = this.fs.doc(`Applicants/${updeteApplicant.Id}`);
    this.applicantDocm.update(updeteApplicant);
  }

  getApplicantsStatus() {
    return this.applicantsStatus;
  }

  getApplicantsHistory() {
    return this.applicantsHistory;
  }

}
