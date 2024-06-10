import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css']
})
export class CoachesComponent {
  
  uname! : string;
 
  regForm = new FormGroup({

    uname:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
    mobileNumber:new FormControl('',[ Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}')]),
    speciality:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(50)]),
    

  })
}
