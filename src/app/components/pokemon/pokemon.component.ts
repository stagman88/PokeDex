import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../../services/data.services';
import { TYPE_COLOURS } from '../../interfaces';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonDetails: any;

  type = Array;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getDetails(params['name']);
    })
  }
  
  getDetails(pokemonName): void {
    this.dataService
    .getPokemonDetails(pokemonName)
    .subscribe((data: any) => {
      
      this.pokemonDetails = data;
    });
  }

  getTypeColour(type: string) {
    if (type) {
      return '#' + TYPE_COLOURS[type];
    }
  }

}

