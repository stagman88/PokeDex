import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { LandingComponent } from './containers/landing/landing.component';
import { PokemonContainerComponent } from './containers/pokemon-container/pokemon-container.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "pokedex", component: HomeComponent },
  { path: "pokedex/:name", component: PokemonContainerComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
    PokemonContainerComponent
]
