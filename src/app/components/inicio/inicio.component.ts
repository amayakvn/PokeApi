import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {
  //name: any = '';
  Pika: any = ''; nameP:any=''; nameBu:any='';
  Char: any = ''; nameC:any=''; Bu:any=''; Ge:any='';
  Sq: any = ''; nameSq:any=''; indexBu: any = '';
  indexP: any = ''; indexSq: any = ''; nameGe:any='';
  indexC: any = ''; indexGe: any = '';

  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
    this.buscar()
  }

  buscar(){
    this.pokemonService.getPika().subscribe((data:any) =>{
      this.Pika = data.sprites.front_default,
      this.indexP = data.id,
      this.nameP = data.name
      console.log(data)
    })
    this.pokemonService.getCh().subscribe((data:any) =>{
      this.Char = data.sprites.front_default,
      this.indexC = data.id,
      this.nameC = data.name
      console.log(data)
    })
    this.pokemonService.getSq().subscribe((data:any) =>{
      this.Sq = data.sprites.front_default,
      this.indexSq = data.id,
      this.nameSq = data.name
      console.log(data)
    })
    this.pokemonService.getBu().subscribe((data:any) =>{
      this.Bu = data.sprites.front_default,
      this.indexBu = data.id,
      this.nameBu = data.name
      console.log(data)
    })
    this.pokemonService.getGe().subscribe((data:any) =>{
      this.Ge = data.sprites.front_default,
      this.indexGe = data.id,
      this.nameGe = data.name
      console.log(data)
    })
  }

  getCuatro(){
    this.pokemonService.getPokemonList(1,4).subscribe((data:any) =>{
      console.log(data)
    })
  }

  getDetalle(){
    this.pokemonService.getPokemonDetail(1).subscribe((data:any) =>{
      console.log(data)
    })
  }

   /* getPoke(){
    this.PkService.getPokemonName('pikachu').then((responce) =>{
    this.name = responce;
    console.log(responce);

    this.Images = this.name.sprites.front_default;
    this.pokemonMoves = responce.moves;
    this.Abilities= responce.abilities;

    }).catch((error:any) => {
      console.log(error);
    });
  } */
}
