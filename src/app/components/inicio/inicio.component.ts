import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IPokemonData, IPokemonListData } from 'src/app/interfaces/pokemon.interfac';
import { ListPokemonService } from 'src/app/services/list-pokemon.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public displayedColumns: string[] = ['id'];
  public data: IPokemonListData[] = [];
  public pokemons = [];
  public dataSource = new MatTableDataSource<any>(this.data);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private listPokemonService: ListPokemonService,
    private router: Router
  ) {
    this.getList();
  }

  ngOnInit(): void {}

  getList() {
    for (let i = 1; i <= 890; i++) {
      this.listPokemonService.getPokemon(i).subscribe((data: any) => {
        const pokemonData = {
          id: i,
          image: data.sprites.front_default,
          name: data.name
        };
        this.data.push(pokemonData);
        this.dataSource.paginator = this.paginator;
      })
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getPokemon(poke) {
    this.router.navigate([`./card-pokemon/${poke.id}`])
  }

}
