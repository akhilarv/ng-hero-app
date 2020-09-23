import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  powers = ['super','medium','average','flexible'];

  model = new Hero(1,'SkyDog',this.powers[2],'Its not Good');
  submitted = false;
  
  onSubmit(){ this.submitted = true; }
  newHero()
  {
    this.model = new Hero(5,'','');
  }

 // get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit(): void {
  }
  
}
