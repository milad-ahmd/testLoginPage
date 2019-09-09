import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { ServiceBase2 } from './serivce-base2.service'

@Injectable({
  providedIn: 'root'
})
export class UserService extends ServiceBase2 {

  constructor(public _HttpClient: HttpClient) {
    super();
    this._objectName = '/users/';
  }
  login(entity){
    return this.postServiceF('/authenticate',entity)
  }

}
