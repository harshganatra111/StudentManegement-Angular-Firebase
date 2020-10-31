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
  ngOnInit(): void {
    this.displayService.getAllData().subscribe(data => {
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
  }

}
