import { Component, OnInit } from '@angular/core';
import { InsertService, GetAllDataService } from '../_services';

@Component({
  selector: 'app-disciplinary-actions',
  templateUrl: './disciplinary-actions.component.html',
  styleUrls: ['./disciplinary-actions.component.scss']
})
export class DisciplinaryActionsComponent implements OnInit {

  regno: number;
  message: string;
  constructor(private insertService: InsertService,private displayService: GetAllDataService) { }

  ngOnInit(): void {
  }
  insert(){
    let coData = {};
    coData['regno'] = this.regno;
    coData['message'] = this.message;
    this.insertService.insertDisData(coData).then(res => {
      this.regno=undefined;
      this.message= "";
      alert("Insertion Successful")
    }).catch(err=>{
      console.log(err);

    });
  }

}
