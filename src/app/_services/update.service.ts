import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(public fireService: AngularFirestore) { }
  updateStudentData(id,data){
    this.fireService.doc('Student/'+id).update(data);
  }
}
