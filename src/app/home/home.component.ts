import { Component, OnInit } from '@angular/core';
import { ServicenowdataService } from '../servicenowdata.service';
import { FormGroup, FormControl, Validators, FormBuilder, Form } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ExcelServiceService} from '../excel-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  incidents: any;
  h1Style: boolean = false;
  exceldata: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
    },{
    eid: 'e102',
    ename: 'ram',
    esal: 2000
    },{
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
    }];

  constructor(private data: ServicenowdataService, private router: Router, private route: ActivatedRoute,private excelService:ExcelServiceService) { }

  ngOnInit() {
    this.data.getIncidents().subscribe(data => {
        // this.incidents = data.result[0].number;
       // if(data.hasOwnProperty('$result'))
        this.incidents = data;
       // this.incidents = data.result;
        console.log(this.incidents);
        //console.log(JSON.stringify(this.incidents));
      }
    );
  }
  updateData(entry){
    console.log(entry);
    this.router.navigate([entry.sys_id])
  }

  exportAsXLSX():void {
    
    this.excelService.exportAsExcelFile(this.incidents.result, 'sample');
 }

}