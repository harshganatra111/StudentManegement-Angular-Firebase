import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GetAllDataService {

  constructor(public fireService: AngularFirestore) { }
  getStudentData(){
    return this.fireService.collection('Student').snapshotChanges();
  }
  getCocurricularData(){
    return this.fireService.collection('Cocurricular').snapshotChanges();
  }
  getExtraCurricularData(){
    return this.fireService.collection('ExtraCurricular').snapshotChanges();
  }
  getDisciplinaryActions(){
    return this.fireService.collection('DisciplinaryActions').snapshotChanges();
  }
  getProgramData(){
    return this.fireService.collection('ProgramData').snapshotChanges();
  }
}
