import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { reject } from 'q';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }
  /* Base url declaraton */
  url = 'http://localhost:3000';
  /* location details API call */
    getlocationData() {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }

    return new Promise(resolve => {
      this.http.get(this.url + '/location')
        .subscribe((response: HttpResponse<UserResponse>) => {
          resolve(response);
        }, error => {
          reject(error);
        }
        );
    });
  }

  /*
  PickUp details API call
  */
  getpickUpDetails(location) {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }

    return new Promise(resolve => {
      this.http.get(this.url + '/pickUpData/' + location)
        .subscribe((response: HttpResponse<UserResponse>) => {

          resolve(response);

        }, error => {
          resolve(error);
        }
        );
    });
  }
   /*
  user details API call
  */
  getUserData() {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }

    return new Promise(resolve => {
      this.http.get(this.url + '/userdata')
        .subscribe((response: HttpResponse<UserResponse>) => {
          resolve(response);
        }, error => {
          resolve(error);
        }
        );
    });
  }
 /*
  Truck details API call
  */
  getTruckDetails() {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }

    return new Promise(resolve => {
      this.http.get(this.url + '/truckdata')
        .subscribe((response: HttpResponse<UserResponse>) => {
          resolve(response);
        }, error => {
          resolve(error);
        }
        );
    });
  }
   /*
  save userData API call
  */
  saveUserData(body) {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }

    return new Promise(resolve => {
      this.http.post('http://localhost:3000/userdata', body)
        .subscribe((response: HttpResponse<UserResponse>) => {
          resolve(response);
        }
        );
    });
  }
   /*
  save truck booking details API call
  */
  saveBooking(body) {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }
    return new Promise(resolve => {
      this.http.post('http://localhost:3000/bookTruck', body)
        .subscribe((response: HttpResponse<UserResponse>) => {
          resolve(response);
        }
        );
    });
  }
  // SetItems(key: string, value: any) {
  //   localStorage.setItem(key, value);
  // }
  // GetItems(key: string) {
  //   return localStorage.getItem(key);
  // }
}
