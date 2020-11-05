import { Component, OnInit } from '@angular/core';
import { GetAllDataService, InsertService } from '../_services';

@Component({
  selector: 'app-co-curricular',
  templateUrl: './co-curricular.component.html',
  styleUrls: ['./co-curricular.component.scss']
})
export class CoCurricularComponent implements OnInit {
  regno: number;
  message: string;
  constructor(private insertService: InsertService,private displayService: GetAllDataService) { }

  ngOnInit(): void {
  }
  insert(){
    let coData = {};
    coData['regno'] = this.regno;
    coData['message'] = this.message;
    this.insertService.insertCoData(coData).then(res => {
      this.regno=undefined;
      this.message= "";
      alert("Insertion Successful")

    }).catch(err=>{
      console.log(err);

    });
  }
}
