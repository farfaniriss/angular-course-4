import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../services/heroes.service";

//para tomar el id
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:Heroe;

  constructor(private _activatedRoute:ActivatedRoute
              ,private _heroesService:HeroesService) {
    this._activatedRoute.params.subscribe(params => 
      {
        this.heroe = _heroesService.getHeroe(params['id']);
      })
   }

  ngOnInit() {
  }

}
