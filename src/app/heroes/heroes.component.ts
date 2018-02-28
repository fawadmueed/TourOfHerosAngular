import { Component, OnInit } from '@angular/core';

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


 selectedHero : Hero;

  heroList : Hero[]=[

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

	detailsHero(catchedHero: Hero): void {

		// console.log(catchedHero);
	this.selectedHero = catchedHero;

}


// INPUT BINDING - Testings
	
	bind1_parent: Hero=
	{
		id: 22, name: 'bind1_parent Property Assigned to bind1_child' 
	}

	bind2_parent: Hero=
	{
		id: 22, name: 'bind2_parent Property Assigned to bind2_child' 
	}
  

}
