import { Component, OnInit } from '@angular/core';
import { InsertService } from '../_services/';
@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {
  name: string;
  age: number;
  address: string;
  email: string;
  constructor(private insertService: InsertService) { }

  ngOnInit(): void {
  }
  insert(){
    let studentData = {};
    studentData['name'] = this.name;
    studentData['age'] = this.age;
    studentData['address'] = this.address;
    studentData['email'] = this.email;
    this.insertService.insertData(studentData).then(res => {
      this.name="";
      this.address= "";
      this.age=undefined;
      this.email="";
      alert("Insertion Successful")
      console.log(res);
      
    }).catch(err=>{
      console.log(err);
      
    });
  }
}
