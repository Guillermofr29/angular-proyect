import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListDbzComponent {

  @Input()
  public characterList: Character[] = [{
    name: "Trunks",
    power: 3000
  }]

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter;

  onDelete(id?:string): void{
    if(!id) return;
    this.onDeleteCharacter.emit(id);
  }

  // onDeleteCharacte(index: number):void{
  //   console.log(index);
  // }

}
