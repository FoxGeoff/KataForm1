import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  questions: string[] = [
    'What school did you attend',
    'What is your mothers maiden name'
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
