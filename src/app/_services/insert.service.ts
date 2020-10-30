import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class InsertService {

  constructor(public fireService: AngularFirestore) { }
  insertData(studentData){
    return this.fireService.collection('Student').add(studentData)
  }
}
