import { Component, OnInit } from '@angular/core';
import {EquipementService} from '../../shared_service/equipement.service';
import {Equipement} from '../../equipement';
import {Router} from '@angular/router';
@Component({
  selector: 'app-list-equipement',
  templateUrl: './list-equipement.component.html',
  styleUrls: ['./list-equipement.component.css']
})
export class ListEquipementComponent implements OnInit {
private equipements:Equipement[];
  constructor(private _equipementService:EquipementService,private _router:Router) { }

  ngOnInit() {
    this._equipementService.getEquipement().subscribe((equipements)=>{
        console.log(equipements);
        this.equipements=equipements;
    },(error)=>{
      console.log(error);
    });
  }
  deleteEquipement(equipement)
  {
      this._equipementService.deleteEquip(equipement.id).subscribe((data)=>{
        this.equipements.splice(this.equipements.indexOf(equipement),1);
      },(error)=>{
        console.log(error);
      });

  }

  updateEquipement(equipement)
  {
    this._equipementService.setter(equipement);
    this._router.navigate(['/op']);
  }
  newEquipement()
  {
    let equipement=new Equipement();
    this._equipementService.setter(equipement);
    this._router.navigate(['/op']);
  }

}
