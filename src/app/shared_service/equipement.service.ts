import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Equipement} from '../equipement';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {
private baseUrl:string="http://localhost:8080/gestionequip";
private headers=new Headers({'Content-Type':'application/json'});
private options=new RequestOptions({headers:this.headers});
private equipement:Equipement;
  constructor(private _http:Http) { }

  getEquipement()
  {
    return this._http.get(this.baseUrl+'/equipements',this.options).map((response:Response) => response.json())
    .catch(this.errorHandler);
  }
  getEquipementsById(id:Number)
  {
    return this._http.get(this.baseUrl+'/equipement/'+id,this.options).map((response:Response) => response.json())
    .catch(this.errorHandler);
  }
  deleteEquip(id:Number)
  {
    return this._http.delete(this.baseUrl+'/equipement/'+id,this.options).map((response:Response) => response.json())
    .catch(this.errorHandler);
  }
  addEquip(myEquip:Equipement)
  {
    return this._http.post(this.baseUrl+'/equipement',JSON.stringify(myEquip),this.options).map((response:Response) => response.json())
    .catch(this.errorHandler);
  }

  updateEquip(myEquip:Equipement)
  {
    return this._http.put(this.baseUrl+'/equipement',JSON.stringify(myEquip),this.options).map((response:Response) => response.json())
    .catch(this.errorHandler);
  }
  errorHandler(error:Response)
  {
     return Observable.throw(error||"SERVER ERROR");
  }
  setter(equipement:Equipement)
  {
    this.equipement=equipement;
  }
  getter()
  {
    return this.equipement;
  }
}
