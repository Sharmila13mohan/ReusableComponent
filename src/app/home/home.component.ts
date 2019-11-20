import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataServiceService } from '../core/dataService/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
/*
Hoe component class
*/
export class HomeComponent implements OnInit {
  homeForm: FormGroup;
  dropdownItems: any;
  selLoc: string;
  getpickUpDetails: any;
  sourceloc: string;
  destination: string;
  name: string;
  mobileNo: number;
  constructor(private fb: FormBuilder, private dataService: DataServiceService, private router: Router) { }
  /*
  OnInit calls getlocationData() API
  */
  async ngOnInit() {

    this.homeForm = this.fb.group({
      YourName: [''],
      MobileNo: [''],
      Source: [''],
      Destination: [''],
      city: ['']
    });
    this.name = '';
    this.mobileNo = null;
    this.dropdownItems = ['Name', 'Age', 'Gender'];
    this.dropdownItems = await this.dataService.getlocationData();
  }
  /*
    on chaning the location  in html onchangedata is called
  */
  async onchangedata(data) {
    this.selLoc = data.target.value;
    this.getpickUpDetails = await this.dataService.getpickUpDetails(this.selLoc);
    this.getpickUpDetails = this.getpickUpDetails.address;
    console.log(this.getpickUpDetails);
  }
  /*
     on chaning pickUplocation  in html saveSourceCode is called
   */
  public saveSourceCode(e): void {
    this.sourceloc = e.target.value;
    const list = this.getpickUpDetails.filter(x => x.address === this.sourceloc)[0];
    console.log(list);
  }
  /*
     on chaning the droplocation  in html saveDestCode is called
   */
  public saveDestCode(e): void {
    this.destination = e.target.value;
    const list = this.getpickUpDetails.filter(x => x.address === this.destination)[0];
    console.log(list);
  }
  /*
     on click of GetEstimate button onGetEstimate
     form data is stored in saveUserData API call
   */
  async onGetEstimate() {
    this.name = this.homeForm.value.YourName;
    this.mobileNo = this.homeForm.value.MobileNo;
    const body = {
      'pickUpLocation': this.sourceloc,
      'dropLocation': this.destination,
      'name': this.homeForm.value.YourName,
      'mobileNo': this.homeForm.value.MobileNo
    };
    await this.dataService.saveUserData(body);
    this.router.navigateByUrl('/estimate');
  }
}
