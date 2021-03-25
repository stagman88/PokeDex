import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { PokeAPI, PokemonDetails } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

   getPokemon(limit, offset) {
   return this.http.get<PokeAPI>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).pipe(catchError(this.handleError));
  }

  getPokemonDetails(name): Observable<any> {
    return this.http.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${name}`).pipe(catchError(this.handleError));
  }

  getPokemonSpecies(name): Observable<any> {
    return this.http.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon-species/${name}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
