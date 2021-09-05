import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  // gives continues access to form
  @ViewChild('f') signUpForm: NgForm;

  questions: string[] = [
    'What school did you attend',
    'What is your mothers maiden name'
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
