import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
/*
button component class
*/
export class ButtonComponent implements OnInit {
  /*
  input components fields from other other components
  */
@Input() buttonType: string;
@Input() buttonValue: string;
  constructor() { }

  ngOnInit() {
  }

}
