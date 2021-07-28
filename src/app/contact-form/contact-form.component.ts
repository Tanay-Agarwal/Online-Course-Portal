import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { GeneralServiceService } from 'src/service/general-service.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  ownerForm:any
  constructor(private fb: FormBuilder, private generalService:GeneralServiceService) { 
  
  }
  submitURL = "http://localhost:8080/contacts";
  ngOnInit()
  {
    let MOBILE_PATTERN = /[0-9\+\-\ ]/;
    this.ownerForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      message: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(MOBILE_PATTERN)]),
    });
  }
  create(data:any)
  {
    console.log(data)
    let keys = Object.keys(data);
    for(let i =0;i<keys.length;i++)
    {
      if(data[keys[i]]==="")
      {
        data[keys[i]]=null;
      }
    }
    this.generalService.post(this.submitURL,data).then(res=>{
      console.log(res);
    });
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.ownerForm.controls[controlName].hasError(errorName);
  }


}
