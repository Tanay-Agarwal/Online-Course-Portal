import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'project-amdocs';
  constructor(private fb: FormBuilder) { 
  }
  
  ngOnInit() {
  

  
}
}
