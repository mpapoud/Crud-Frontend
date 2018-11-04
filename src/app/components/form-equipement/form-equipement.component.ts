import { Component, OnInit } from '@angular/core';
import {Equipement} from '../../equipement';
import {EquipementService} from '../../shared_service/equipement.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-form-equipement',
  templateUrl: './form-equipement.component.html',
  styleUrls: ['./form-equipement.component.css']
})
export class FormEquipementComponent implements OnInit {
 private equipement:Equipement;

  constructor(private _equipementService:EquipementService,private _router:Router) { }

  ngOnInit() {
    this.equipement=this._equipementService.getter();
  }
  processForm()
  {
    if(this.equipement.id==undefined)
    {
      this._equipementService.addEquip(this.equipement).subscribe((equipement)=>{
        console.log(equipement);
        this._router.navigate(['/']);
      },(error)=>{
         console.log(error);
      });
    }else{
      this._equipementService.updateEquip(this.equipement).subscribe((equipement)=>{
        console.log(equipement);
        this._router.navigate(['/']);
      },(error)=>{
         console.log(error);
      });
    }
  }
}
