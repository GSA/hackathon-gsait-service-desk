import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServicenowdataService } from '../servicenowdata.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  dataResult;
  displaydata;
  constructor(private data: ServicenowdataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
this.displaydata = this.route.snapshot.paramMap.get('updateincident');
console.log(this.displaydata);
this.data.getSpecificIncidents(this.displaydata).subscribe(data => {  
 // if(data.hasOwnProperty('$result'))
  this.dataResult = data; 
  console.log(data);
}
);


    // this.route.paramMap
    //   .switchMap((params: ParamMap) => 
    //   this.data.getSpecificIncidents(params.get('updateincident')))
    //   .subscribe((data) => {
    //     console.log(data)
    //     }  )

}

onSubmit(f){
  console.log(this.displaydata);
  console.log(f.value);
  this.data.patchIncident(this.displaydata,f.value).subscribe(data => {
    console.log(data);
   // setTimeout(() => this.toastr.success('', 'Created Successfully', { timeOut: 2000 }));
    this.router.navigate(['./home']);
  }
);
}
}
