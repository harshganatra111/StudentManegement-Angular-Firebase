import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class InsertService {

  constructor(public fireService: AngularFirestore) { }
  insertStudentData(studentData){
    return this.fireService.collection('Student').add(studentData)
  }
  insertCoData(studentData){
    return this.fireService.collection('Cocurricular').add(studentData)
  }
  insertDisData(studentData){
    return this.fireService.collection('DisciplinaryActions').add(studentData)
  }
  insertExtraCurricularData(studentData){
    return this.fireService.collection('ExtraCurricular').add(studentData)
  }
}
