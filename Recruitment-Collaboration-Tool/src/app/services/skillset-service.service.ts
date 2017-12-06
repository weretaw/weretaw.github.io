import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Skillset } from '../model/skillset';

@Injectable()
export class SkillsetServiceService {

  skillsetCollection: AngularFirestoreCollection<Skillset>;
  skillsets: Observable<Skillset[]>;

  constructor(public skillset: AngularFirestore) {
    this.skillsets = this.skillset.collection('Skillset').valueChanges();
  }

  getSkillsets() {
    return this.skillsets;
  }
}
