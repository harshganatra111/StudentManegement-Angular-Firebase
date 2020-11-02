import { Component, OnInit } from '@angular/core';
import { InsertService, GetAllDataService } from '../_services';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor(private insertService: InsertService,private displayService: GetAllDataService) { }
  regno: number;
  cname: string;
  credits: number;
  cid: number;
  ngOnInit(): void {
  }
  insert(){
    let studentData = {};
    studentData['regno'] = this.regno;
    studentData['cname'] = this.cname;
    studentData['credits'] = this.credits;
    studentData['cid'] = this.cid;
    this.insertService.insertCourseData(studentData).then(res => {
      this.regno=undefined;
      this.cname= "";
      this.cid=undefined;
      this.credits=undefined;
      alert("Insertion Successful")
      console.log(res);

    }).catch(err=>{
      console.log(err);

    });
  }
}
