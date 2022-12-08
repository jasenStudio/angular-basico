
import { Component } from "@angular/core";

@Component({
selector:'app-contador',

template:`
<p>{{title}}</p>

<button (click)="acumular(base)">+{{base}}</button>

<span> {{ numero }}</span>

<button (click)="acumular(-base)">-{{base}}</button>
`
})


export class ContadorComponent {


    title = 'contadorApp';

    numero:number = 10;
  base =  5;
  
  acumular(valor:number){
     this.numero += valor;
  }

  
}