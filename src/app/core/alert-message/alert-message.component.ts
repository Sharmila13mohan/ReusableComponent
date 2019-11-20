import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
/*
alertMessage component class
*/
export class AlertMessageComponent implements OnInit {
@Input() showalertmsg: boolean;
@Input() alertMsg: string;
@Input() alertType: string;
  constructor() { }

  ngOnInit() {
// setTimeout(()=>{
// this.showalertmsg = false;
// }, 3000);
  }
}
