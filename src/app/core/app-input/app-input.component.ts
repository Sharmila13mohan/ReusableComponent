import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss']
})
/*
input text box component class
*/
export class AppInputComponent implements OnInit {
   /*
  input components fields from other other components
  */
@Input() name: string;
@Input() labelName: string;
@Input() formGroup: FormGroup;
@Input() type: any;
  constructor() { }

  ngOnInit() {
  }

}
