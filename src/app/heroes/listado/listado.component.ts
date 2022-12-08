import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[] = ["goku","vegeta","Gohan","goten"];
  heroeBorrado:string = "";
  
  borrarHeroe(){
   //const heroeBorrado = this.heroes.shift();
    this.heroeBorrado = this.heroes.shift() || "";
  }
}
