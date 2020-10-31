import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GetAllDataService {

  constructor(public fireService: AngularFirestore) { }
  getAllData(){
    return this.fireService.collection('Student').snapshotChanges();
  }
}
