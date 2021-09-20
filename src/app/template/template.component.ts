import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Secret {
  ask: string,
  value: string
}
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {


  defaultQuestion ='pet';

  // gives continues access to form
  @ViewChild('f') signUpForm: NgForm;

  questions: Secret[] = [
    { ask: 'What school did you attend', value: 'school' },
    { ask: 'What is your mothers maiden name', value: 'pet' }
  ];

  constructor() { }

  ngOnInit(): void {

  }

  /*
    onSubmit(form: NgForm) {
      console.log(form);
    }
  */
 
  // Alt method using @ViewChild()
  onSubmit() {
    console.log(this.signUpForm);
  }
}
