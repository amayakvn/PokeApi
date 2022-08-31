import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  name: string = "";
  urlImage: string = "";
  type: string = "";
  abilities: string = "";
  weight: string = "";
  height: string = "";
  id: string = "";
  exp: string = "";

  constructor(private pokeSer : PokemonService) { }

  ngOnInit(): void {
    this.buscarUno()
  }

  buscarUno(){
    this.pokeSer.getUno(this.name).subscribe((data:any) =>{
      this.urlImage = data.sprites.other.home.front_default,
      this.name = data.name,
      this.id = data.id,
      this.type = data.types[0].type.name
      this.abilities = data.abilities.length
      this.weight = data.weight
      this.height = data.height
      this.exp = data.base_experience
      console.log(data)
    })
  }

}
