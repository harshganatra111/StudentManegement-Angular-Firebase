import { Component, OnInit } from '@angular/core';
import { GetAllDataService, InsertService } from '../_services/';
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
  student: any;
  regno: number;
  constructor(private insertService: InsertService,private displayService: GetAllDataService) { }

  ngOnInit(): void {
    this.displayService.getStudentData().subscribe(data => {
      this.student = data.map(e=>{
        return{
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          age: e.payload.doc.data()['age'],
          address: e.payload.doc.data()['address'],
        };

      });

    });
  }
  insert(){
    let studentData = {};
    studentData['name'] = this.name;
    studentData['age'] = this.age;
    studentData['address'] = this.address;
    studentData['email'] = this.email;
    this.regno = 1760000 + parseInt(this.student.length)+ 1;
    studentData['regno'] = this.regno;
    this.insertService.insertStudentData(studentData).then(res => {
      alert("Insertion Successful\nStudent Regno is :"+ this.regno);
      this.name="";
      this.address= "";
      this.age=undefined;
      this.email="";
      console.log(res);

    }).catch(err=>{
      console.log(err);

    });
  }
}
