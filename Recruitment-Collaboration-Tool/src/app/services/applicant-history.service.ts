import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ApplicantHistory } from '../model/Applicant-History';
import { DataServiceService } from './data-service.service';
@Injectable()
export class ApplicantHistoryService {

  applicantDocm: AngularFirestoreDocument<ApplicantHistory>;
  applicanCollection: AngularFirestoreCollection<ApplicantHistory>;
  applicantsHistory: Observable<ApplicantHistory[]>;
  constructor(public fs: AngularFirestore, public DataService: DataServiceService) {
    
        this.applicanCollection = this.fs.collection('ApplicantHistory');
    
        this.applicantsHistory = this.applicanCollection.snapshotChanges().map(chages => {
          return chages.map(applicant => {
            const applicantData = applicant.payload.doc.data() as ApplicantHistory;
            applicantData.Id = applicant.payload.doc.id as any;
            return applicantData;
          })
        });
      }

  getApplicantsHistory() {
    return this.applicantsHistory;
  }

  addNewApplicantHistory(newApplicant: ApplicantHistory) {
    this.applicanCollection.add(newApplicant);
  }

  updeteApplicants(updete: ApplicantHistory) {
    this.applicantDocm = this.fs.doc(`Applicants/${updete.Id}`);
     this.applicantDocm.update(updete);
  }
}
