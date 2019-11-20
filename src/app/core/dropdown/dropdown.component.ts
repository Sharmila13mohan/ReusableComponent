import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataServiceService } from '../dataService/data-service.service';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
/*
deropDown component class
*/
export class DropdownComponent implements OnInit {
  /*
  Fields received from other components
  */
  @Input() labelDrop: string;
  @Input() dropItems: any;
  @Output() selItem = new EventEmitter<string>();
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
  }
}
