import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { LandingComponent } from './containers/landing/landing.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonContainerComponent } from './containers/pokemon-container/pokemon-container.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    HomeComponent,
    LandingComponent,
    PokemonComponent,
    PokemonContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
