import { Component, OnInit } from '@angular/core';
import { InsertService, GetAllDataService } from '../_services';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.scss']
})
export class AddProgramComponent implements OnInit {

  pname: string;
  regno: number;
  currentYear: any;
  student: any;
  constructor(private insertService: InsertService,private displayService: GetAllDataService) { }

  ngOnInit(): void {
    this.displayService.getStudentData().subscribe(data => {
      this.student = data.map(e=>{
        return{
          id: e.payload.doc.id,
          pname: e.payload.doc.data()['pname'],
          regno: e.payload.doc.data()['regno'],
          startYear: e.payload.doc.data()['currentYear']
        };

      });

    });
  }
  insert(){
    let studentData = {};
    studentData['pname'] = this.pname;
    studentData['regno'] = this.regno;
    var d = new Date();
    this.currentYear = d.getFullYear();
    studentData['currentYear'] = this.currentYear;

    this.insertService.insertProgramData(studentData).then(res => {
      this.pname="";
      this.regno=undefined;
      alert("Insertion Successful")
      console.log(res);

    }).catch(err=>{
      console.log(err);

    });
  }

}
