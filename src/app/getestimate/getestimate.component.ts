import { Component, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from '../core/dataService/data-service.service';
import { AlertboxComponent } from '../core/alertbox/alertbox.component';

@Component({
  selector: 'app-getestimate',
  templateUrl: './getestimate.component.html',
  styleUrls: ['./getestimate.component.scss']
})
/*
get estimate class
*/
export class GetestimateComponent implements OnInit {
  tableHeader: string[];
  tblbody: any;
  userData: any;
  truckData: any;
  showAlertMsg: boolean;
  bookingID: number;
  bookingData: any;
  alertmsg: string;
  @ViewChild('alertBox', { static: false }) AlertboxComponent: AlertboxComponent;
  constructor(private dataService: DataServiceService) { }
  /*
  onInit calss userdata API and truckdetails API to display data
  */
  async ngOnInit() {
    this.tableHeader = ['pickUpLocation', 'dropLocation'];
    this.showAlertMsg = false;
    this.tblbody = [{
      pickUpLocation: 'Marathalli,Bangalore,karnataka',
      dropLocation: 'Whitefield,Bangalore,karnataka'
    }];
    this.tblbody = await this.dataService.getUserData();
    this.truckData = await this.dataService.getTruckDetails();
  }
  /*
  on bookNow button click onBookowClick() called
  saves data to saveBooking API and
  gets the booking ID from API
  */
  async onBookowClick(data) {
    this.bookingData = await this.dataService.saveBooking(data);
    this.showAlertMsg = true;
    this.bookingID = this.bookingData.id;
    this.alertmsg = 'Your Booking has been done.Your Booking ID is ' + this.bookingID;
    this.AlertboxComponent.showDialog();
  }

}
