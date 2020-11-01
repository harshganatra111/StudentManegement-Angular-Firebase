import { Component, OnInit } from '@angular/core';
import { GetAllDataService } from '../_services';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.scss']
})
export class DisplayAllComponent implements OnInit {

  constructor(private displayService: GetAllDataService) { }
  student = {};
  coCurricularData = {};
  extraCurricularData = {};
  disciplinaryActions = {};
  ngOnInit(): void {
    this.displayService.getStudentData().subscribe(data => {
      this.student = data.map(e=>{
        return{
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          age: e.payload.doc.data()['age'],
          address: e.payload.doc.data()['address'],
          regno: e.payload.doc.data()['regno']
        };

      });
      console.log(this.student);
    });
    this.displayService.getCocurricularData().subscribe(data =>{
      this.coCurricularData = data.map(e=>{
        return{
          ed: e.payload.doc.id,
          regno: e.payload.doc.data()['regno'],
          message: e.payload.doc.data()['message']
        }
      });
      console.log(this.coCurricularData);

    });
    this.displayService.getExtraCurricularData().subscribe(data =>{
      this.extraCurricularData = data.map(e=>{
        return{
          ed: e.payload.doc.id,
          regno: e.payload.doc.data()['regno'],
          message: e.payload.doc.data()['message']
        }
      });
      console.log(this.extraCurricularData);

    });
    this.displayService.getExtraCurricularData().subscribe(data =>{
      this.disciplinaryActions = data.map(e=>{
        return{
          ed: e.payload.doc.id,
          regno: e.payload.doc.data()['regno'],
          message: e.payload.doc.data()['message']
        }
      });
      console.log(this.disciplinaryActions);

    });
  }

}
