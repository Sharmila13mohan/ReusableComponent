import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DataServiceService } from './data-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { asyncData, asyncError } from '../../../testing/async-observable-helpers';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { reject } from 'q';

const testUrl = '/http://localhost:3000/loginData/1';
interface Data {
  id: 1;
  userName: 'Sharmila';
  password: 'sharmila';
  status: 200;
}
describe('DataServiceService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let httpMock: HttpTestingController;
  let service: DataServiceService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule]
    });
    service = TestBed.get(DataServiceService);
    httpMock = TestBed.get(HttpTestingController);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new DataServiceService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should be GetItems', () => {
  //   expect(service.GetItems).toBeDefined();
  // });

  it('getLocationData() should http GET location names', () => {
    const locnames =
      [
        'Ahamadabad',
        'Amrister',
        'Bangalore',
        'Chennai',
        'Cochin',
        'Delhi',
        'Hyderabad',
        'Mumbai'
      ];

    httpClientSpy.get.and.returnValue(asyncData(locnames));
    service.getlocationData().then(
      res => expect(res).toEqual(locnames),
      reject
    );

  });

  it('getpickUpDetails() should http GET pickUpdetails', () => {
    const pickUpnames = {
      'id': 'Bangalore',
      'address': [
        'ElectronicCity, Bangalore',
        'Marathalli, Bangalore',
        'Bohmnahalli, Bangalore',
        ' WhiteField, Bangalore'
      ]
    };
    httpClientSpy.get.and.returnValue(asyncData(pickUpnames));
    service.getpickUpDetails(pickUpnames.id).then(
      res => expect(res).toEqual(pickUpnames),
      reject
    );
  });
  it('getUserData() should http GET getUserData', () => {
    const userData = {
      'pickUpLocation': 'ElectronicCity, Bangalore',
      'dropLocation': 'Bohmnahalli, Bangalore',
      'name': 'kabilan',
      'mobileNo': 9600430644,
      'id': 1
    };
    httpClientSpy.get.and.returnValue(asyncData(userData));
    service.getUserData().then(
      res => expect(res).toEqual(userData),
      reject
    );
  });
  it('getTruckDetails() should http GET getTruckDetails', () => {
    const truckData = {
      'cost': 'Rs 1122',
      'imgsrc': 'card-truck.jfif',
      'capacity': '1200kg',
      'truckName': 'SUPER ACE',
      'size': '8.2ft x 4.9ft x 4.9ft'
    };
    httpClientSpy.get.and.returnValue(asyncData(truckData));
    service.getTruckDetails().then(
      res => expect(res).toEqual(truckData),
      reject
    );

  });
  it('saveUserData() should http GET saveUserData', () => {
    const userData = {
      'pickUpLocation': 'ElectronicCity, Bangalore',
      'dropLocation': 'Bohmnahalli, Bangalore',
      'name': 'kabilan',
      'mobileNo': 9600430644,
      'id': 1
    };
    httpClientSpy.get.and.returnValue(asyncData(userData));
    service.saveUserData(userData).then(
      res => expect(res).toEqual(userData),
      reject
    );

  });
  it('saveBooking() should http GET saveBooking', () => {
    const bookData = {
      'cost': 'Rs 1122',
      'imgsrc': 'card-truck.jfif',
      'capacity': '1200kg',
      'truckName': 'SUPER ACE',
      'size': '8.2ft x 4.9ft x 4.9ft'
    };
    httpClientSpy.get.and.returnValue(asyncData(bookData));
    service.saveBooking(bookData).then(
      res => expect(res).toEqual(bookData),
      reject
    );

  });
  it('should return an error when the server returns a 404 for getlocationData', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });
    const locnames =
      [
        'Ahamadabad',
        'Amrister',
        'Bangalore',
        'Chennai',
        'Cochin',
        'Delhi',
        'Hyderabad',
        'Mumbai'
      ];
    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    service.getlocationData().then(
      res => reject('expected an error, not heroes'),
      error => expect(error.message).toContain('test 404 error')
    );
  });

  it('should return an error when the server returns a 404 for getpickUpDetails', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });
    const pickUpnames = {
      'id': 'Bangalore',
      'address': [
        'ElectronicCity, Bangalore',
        'Marathalli, Bangalore',
        'Bohmnahalli, Bangalore',
        ' WhiteField, Bangalore'
      ]
    };
    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    service.getpickUpDetails(pickUpnames.id).then(
      res => reject('expected an error, not heroes'),
      error => expect(error.message).toContain('test 404 error')
    );
  });
  it('should return an error when the server returns a 404 for userData', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });
    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
    service.getUserData().then(
      res => reject('expected an error, not heroes'),
      error => expect(error.message).toContain('test 404 error')
    );
  });
  it('should return an error when the server returns a 404 for getTruckDetails', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });
    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
    service.getTruckDetails().then(
      res => reject('expected an error, not heroes'),
      error => expect(error.message).toContain('test 404 error')
    );
  });
});
