import { Component, OnInit } from '@angular/core';
import { GetAllDataService } from '../_services';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.scss']
})
export class DisplayAllComponent implements OnInit {

  constructor(private displayService: GetAllDataService) { }
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
          name: e.payload.doc.data()['name'],
          age: e.payload.doc.data()['age'],
          address: e.payload.doc.data()['address'],
          regno: e.payload.doc.data()['regno'],
          email: e.payload.doc.data()['email']
        };

      });
    });
    this.displayService.getCocurricularData().subscribe(data =>{
      this.coCurricularData = data.map(e=>{
        return{
          id: e.payload.doc.id,
          regno: e.payload.doc.data()['regno'],
          message: e.payload.doc.data()['message']
        }
      });
    });
    this.displayService.getExtraCurricularData().subscribe(data =>{
      this.extraCurricularData = data.map(e=>{
        return{
          id: e.payload.doc.id,
          regno: e.payload.doc.data()['regno'],
          message: e.payload.doc.data()['message']
        }
      });
    });
    this.displayService.getDisciplinaryActions().subscribe(data =>{
      this.disciplinaryActions = data.map(e=>{
        return{
          id: e.payload.doc.id,
          regno: e.payload.doc.data()['regno'],
          message: e.payload.doc.data()['message']
        }
      });
    });
    this.displayService.getProgramData().subscribe(data =>{
      this.programData = data.map(e=>{
        return{
          id: e.payload.doc.id,
          regno: e.payload.doc.data()['regno'],
          pname: e.payload.doc.data()['pname'],
          currentYear: e.payload.doc.data()['currentYear']
        }
      });
    });
    this.displayService.getCourseData().subscribe(data =>{
      this.courseData = data.map(e=>{
        return{
          id: e.payload.doc.id,
          regno: e.payload.doc.data()['regno'],
          cname: e.payload.doc.data()['cname'],
          credits: e.payload.doc.data()['credits'],
          cid: e.payload.doc.data()['cid']
        }
      });
    });
  }

}
