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
  hero: Hero={
  	id: 1,
  	name: 'WindStorm'
  };

  heroine1: Heroine={
  	id:202,
  	name:'Hira',
  	sex:'Female'
  }

  heroine2: Heroine={
  	id:204,
  	name:'Anabia',
  	sex:'Female'
  }

}
