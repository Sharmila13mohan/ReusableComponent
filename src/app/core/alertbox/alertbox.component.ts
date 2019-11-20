import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alertbox',
  templateUrl: './alertbox.component.html',
  styleUrls: ['./alertbox.component.scss']
})
export class AlertboxComponent implements OnInit {
  @Input() alertBody;
  @Input() alertHeader;
  displayAlert: boolean;

  constructor() { }

  ngOnInit() {
   this.displayAlert = false;
  }
   showDialog() {
      this.displayAlert = true;
    }
}
