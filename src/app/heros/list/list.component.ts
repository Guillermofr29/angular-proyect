import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroes: string[] = ['Iron Man', 'Hulk', 'Spider Man', 'Capitán América', 'DeadPool']
  public deletedHero?: string;
  public mostrar: boolean = true;

  deletedLastHero():void{
    this.deletedHero = this.heroes.pop();
  }
}
