import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string { //se invoca como una propiedad
    return this.name.toUpperCase();
  }

  getHeroDescription():string{ //public si se omite al inicio
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    /*
    //TODO:
    throw 'Método no implementado'
    */
    this.name='Spiderman';
  }

  changeAge():void{
    this.age=25;
  }

  resetForm():void{
    this.name='ironman';
    this.age=45;


    //AL MODIFICAR LAS PROPIEDADES CON JS Y NO CON LA INTERPOLACION SE PUEDEN CAUSAR PROBLEMAS
    // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
  }
}
