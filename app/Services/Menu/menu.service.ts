import { Injectable } from '@angular/core';
import { Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { MenuItem, SubMenu } from '../../Objects/Menu/menu.object';

@Injectable()
export class MenuService {
  constructor(private http:Http){}
  getMenu(id){
    return new Promise((resolve, reject) => {
      this.http.get('./app/Data/' + id + '.json')
      .map((res) => res.json())
      .subscribe(
        (res) => {
          //console.log(res);
          return resolve(res);
        },
        (err) => {
          return reject(err);
        }
      );
    })
  }
  getAdminMenu() {
    return new Promise((resolve, reject) => {
      this.http.get('./app/Data/admin.json')
      .map((res) => res.json())
      .subscribe(
        (res) => {
          //console.log(res);
          return resolve(res);
        },
        (err) => {
          return reject(err);
        }
      );
    })
  }
  getStudentMenu() {
    return new Promise((resolve, reject) => {
      this.http.get('./app/Data/student.json')
      .map((res) => res.json())
      .subscribe(
        (res) => {
          //console.log(res);
          return resolve(res);
        },
        (err) => {
          return reject(err);
        }
      );
    })
  }
  getAlumniMenu() {
    return new Promise((resolve, reject) => {
      this.http.get('./app/Data/alumni.json')
      .map((res) => res.json())
      .subscribe(
        (res) => {
          //console.log(res);
          return resolve(res);
        },
        (err) => {
          return reject(err);
        }
      );
    })
  }
  getSponsorMenu() {
    return new Promise((resolve, reject) => {
      this.http.get('./app/Data/sponsor.json')
      .map((res) => res.json())
      .subscribe(
        (res) => {
          //console.log(res);
          return resolve(res);
        },
        (err) => {
          return reject(err);
        }
      );
    })
  }
}
