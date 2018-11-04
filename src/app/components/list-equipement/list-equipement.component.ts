import { Component, OnInit } from '@angular/core';
import {EquipementService} from '../../shared_service/equipement.service';
import {Equipement} from '../../equipement';
@Component({
  selector: 'app-list-equipement',
  templateUrl: './list-equipement.component.html',
  styleUrls: ['./list-equipement.component.css']
})
export class ListEquipementComponent implements OnInit {
private equipements:Equipement[];
  constructor(private _equipementService:EquipementService) { }

  ngOnInit() {
    this._equipementService.getEquipement().subscribe((equipements)=>{
        console.log(equipements);
        this.equipements=equipements;
    },(error)=>{
      console.log(error);
    })
  }

}
