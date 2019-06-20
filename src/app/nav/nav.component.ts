import { Component, OnInit } from '@angular/core';
import { ServicenowdataService } from '../servicenowdata.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = 'GSA IT Help Desk';
  constructor() { }

  ngOnInit() {
  }

}
