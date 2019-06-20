import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServicenowdataService } from '../servicenowdata.service';
import { Router, ActivatedRoute } from '@angular/router';

//import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private data: ServicenowdataService, private router: Router) { }

  short_description = new FormControl();
  comments = new FormControl();
  urgency = new FormControl();
  state = new FormControl();
  caller_id = new FormControl();
  //opened_at = new FormControl();
 
  ngOnInit() {
  }
  onSubmit(f){
    console.log(f.value);
    this.data.postIncident(f.value).subscribe(data => {
      console.log(data);
     // setTimeout(() => this.toastr.success('', 'Created Successfully', { timeOut: 2000 }));
      this.router.navigate(['./home']);
    }
  );
  }

}
