import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';

//para tomar el id
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html'
})
export class SearcherComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;
  constructor(private _activatedRoute:ActivatedRoute
    ,private _heroesService:HeroesService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.searchHeroes(params['termino']);
      this.termino = params['termino'];
    })
  }

}
