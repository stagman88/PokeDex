import { Component, OnInit } from '@angular/core';
import { PokeAPI, PokemonDetails, Results, TYPE_COLOURS } from 'src/app/interfaces';
import { DataService } from '../../services/data.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonsLoaded: boolean;
  pokemons: PokeAPI;
 
  pageSub: any;
  offset: number = 0;
  page: number = 1;
  totalPokemons: number;
  totalRecords: string;
  pagePokemon = [];
  pokemonPerPage = 50;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pokemonsLoaded = false;
    this.pageSub = this.route
    .queryParams
    .subscribe(params => {
      this.page = +params['page'];
    });
    this.setPageOffset();
    this.getPokemons(this.pokemonPerPage, this.offset);
  }

  ngOnDestroy() {
    this.pageSub.unsubscribe();
  }

  setPageOffset() {
    this.offset = (this.page - 1) * this.pokemonPerPage;
  }

  getPokemons(limit: number, offset: number) {
    this.dataService.getPokemon(limit, offset).subscribe((data: PokeAPI) => {
      this.pokemons = data;
      
      if (this.pokemons.count > 0) {

        this.totalPokemons = this.pokemons.count;
        this.pagePokemon = [...this.pokemons.results]
       
        this.pokemons.results.forEach(pokemon => {
        pokemon.id = pokemon.url.split('/') [
          pokemon.url.split('/').length - 2
        ];

        this.getPokemonDetails(pokemon);
        });
      }
    });
  }

  getPokemonDetails(pokemon: Results) {
    this.dataService
      .getPokemonDetails(pokemon.name)
      .subscribe((details: PokemonDetails) => {
        pokemon.details = details;

        if (pokemon.id === '50') {
          this.pokemonsLoaded = true;
        }
      });
  }

  getTypeColour(type: string) {
    if (type) {
      return '#' + TYPE_COLOURS[type];
    }
  }

  pageChanged(pageNum) {
    this.page = pageNum;
    this.setPageOffset();
    this.router.navigate(['/pokedex'], {queryParams: { page: pageNum }});
  }

  onSelect(pokemon) {
    this.router.navigate(['/pokedex', pokemon.details.name]);
  }
}