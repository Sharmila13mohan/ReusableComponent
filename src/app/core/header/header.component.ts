import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
/*
Hedaer component class
*/
export class HeaderComponent implements OnInit {
  homeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  show:boolean = false;

  toggleCollapse() {
    this.show = !this.show
  }
}
