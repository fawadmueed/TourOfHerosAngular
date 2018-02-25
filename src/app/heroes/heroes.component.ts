import { Component, OnInit } from '@angular/core';

//Importing Class - HERO - from -Location ../hero
import { Hero } from '../hero'
import { Heroine } from '../hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	// LifeCycle hook , Angular call it shortly after creating component
  }

  //Object hero of class Hero , with id= and name=
  hero: Hero;

  	//Creating Array of Objects
  // heroines: Heroine[]=[{
  // 	id:202,
  // 	name:'Hira',
  // 	sex:'Female'
  // },
  // {
  // 	id:204,
  // 	name:'Anabia',
  // 	sex:'Female'
  // }]

  heroList:Hero[]=[

  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

displayHero(catchedHero: Hero): void {

		// console.log(catchedHero);
	this.hero = catchedHero;
	console.log(this.hero);
}

  

}
