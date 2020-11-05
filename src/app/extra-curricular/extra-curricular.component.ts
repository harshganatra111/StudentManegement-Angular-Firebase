import { Component, OnInit } from '@angular/core';
import { InsertService, GetAllDataService } from '../_services';

@Component({
  selector: 'app-extra-curricular',
  templateUrl: './extra-curricular.component.html',
  styleUrls: ['./extra-curricular.component.scss']
})
export class ExtraCurricularComponent implements OnInit {

  regno: number;
  message: string;
  constructor(private insertService: InsertService,private displayService: GetAllDataService) { }

  ngOnInit(): void {
  }
  insert(){
    let coData = {};
    coData['regno'] = this.regno;
    coData['message'] = this.message;
    this.insertService.insertExtraCurricularData(coData).then(res => {
      this.regno=undefined;
      this.message= "";
      alert("Insertion Successful")
    }).catch(err=>{
      console.log(err);

    });
  }
}
