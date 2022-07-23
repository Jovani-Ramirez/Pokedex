import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemonData, IPokemonType, IStatsPokemon } from 'src/app/interfaces/pokemon.interfac';
import { ListPokemonService } from 'src/app/services/list-pokemon.service';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent implements OnInit {

  public pokemon: IPokemonData;
  public pokemonType: IPokemonType[] = [];
  public stats: IStatsPokemon[] = [];


  constructor(
    private listPokemonService: ListPokemonService,
    private activateRoute: ActivatedRoute
  ) {
    this.pokemon = { abilities: {}, species: {}, sprites: {}, types: {}, stats: {} }
  }

  ngOnInit(): void {
    this.routePokemon();
  }

  routePokemon() {
    this.activateRoute.params.subscribe( params => this.getPokemon(params['id']));
  }

  getPokemon(id) {
    this.listPokemonService.getPokemon(id).subscribe((data: any )=> {
      const type = data.types;
      const stat = data.stats;
      this.pokemonType = type;
      this.stats = stat;
      this.pokemon = data;
      console.log(data);
    });
  }

}
