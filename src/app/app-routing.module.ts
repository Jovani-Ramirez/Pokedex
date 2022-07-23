import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'pokedex', component: PokedexComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'card-pokemon/:id', component: CardPokemonComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'pokedex' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
