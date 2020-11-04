import { Component, OnInit } from '@angular/core';
import { GetAllDataService } from '../_services';
import { UpdateService } from '../_services/update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private displayService: GetAllDataService, private updateService: UpdateService) { }
  student : any;
  coCurricularData: any;
  extraCurricularData: any;
  disciplinaryActions: any;
  programData: any;
  courseData: any;
  noDatamessage = 'No data Available';
  ngOnInit(): void {
    this.displayService.getStudentData().subscribe(data => {
      this.student = data.map(e=>{
        return{
          id: e.payload.doc.id,
          isEdit: false,
          name: e.payload.doc.data()['name'],
          age: e.payload.doc.data()['age'],
          address: e.payload.doc.data()['address'],
          regno: e.payload.doc.data()['regno'],
          email: e.payload.doc.data()['email']
        };

      });
      console.log(this.student);
    });

  }
  editRecord(data){
    data.isEdit = true;
    data.editName = data.name;
    data.editAge = data.age;
    data.editEmail= data.email;
    data.editAddress= data.address;
    data.editRegno = data.regno;
  }
  onUpdate(data){
    let studentData = {};
    studentData['name'] = data.editName;
    studentData['age'] = data.editAge;
    studentData['address'] = data.editAddress;
    studentData['email'] = data.editEmail;
    this.updateService.updateStudentData(data.id, studentData)
    data.isEdit=false;
  }
}
