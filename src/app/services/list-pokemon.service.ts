import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListPokemonService {

  public apiUrl = environment.API_URL

  constructor(
    private http: HttpClient
  ) { }


  getPokemon(index){
    return this.http.get(`${this.apiUrl}/pokemon/${index}`);
  }
}
