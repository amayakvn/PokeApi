import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  id: number=0;
  name:string = "";
  sprites: string="";

  //urlPokemones = environment.apiUrl+'id'
  private baseUrl = 'https://pokeapi.co/api/v2/';
  private url: string = "https://pokeapi.co/api/v2/pokemon";
  constructor(private http : HttpClient) { }

  getUno(name: string){
    return this.http.get(`${this.url}/${name}`)
  }

  getPika(){
    return this.http.get(`${this.url}/pikachu`)
  }
  getCh(){
    return this.http.get(`${this.url}/charmander`)
  }
  getSq(){
    return this.http.get(`${this.url}/squirtle`)
  }
  getBu(){
    return this.http.get(`${this.url}/bulbasaur`)
  }
  getGe(){
    return this.http.get(`${this.url}/gengar`)
  }
  getPokemonList(offset: number, limit: number = 20) {
    return this.http.get(this.baseUrl + 'pokemon?offset=' + offset + '&limit=' + limit)
}

  getPokemonDetail(pokemon: number | string) {
      return this.http.get(this.baseUrl + 'pokemon/' + pokemon);
  }
}
