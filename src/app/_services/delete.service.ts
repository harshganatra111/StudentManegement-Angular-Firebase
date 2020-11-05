import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(public fireService: AngularFirestore) { }
  deleteStudentData(id){
    this.fireService.doc('Student/'+id).delete();
  }
}
