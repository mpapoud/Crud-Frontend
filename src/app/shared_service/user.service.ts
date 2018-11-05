import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {User} from '../user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl:string="http://localhost:8080";
private headers=new Headers({'Content-Type':'application/json'});
private options=new RequestOptions({headers:this.headers});
private user:User;
  constructor(private _http:Http) { }

  addUser(Myuser:User)
  {
    return this._http.post(this.baseUrl+'/register',JSON.stringify(Myuser),this.options).map((response:Response) => response.json())
    .catch(this.errorHandler);
  }
  errorHandler(error:Response)
  {
     return Observable.throw(error||"SERVER ERROR");
  }

  setter(user:User)
  {
    this.user=user;
  }
  getter()
  {
    return this.user;
  }
}
