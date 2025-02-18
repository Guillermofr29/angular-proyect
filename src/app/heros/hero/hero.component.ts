import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iron man';
  public age:  number = 35;
  public mostrarMsj: boolean = true;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  get descriptionHero():string {
    return `${this.name} - ${this.age}`
  }

  changeNameHero(): void {
    this.name = "Hulk";
  }

  changeAgeHero(): void {
    this.age = 24;
  }

  resentHero(): void {
    this.name = 'iron man';
    this.age = 35;
  }

}



