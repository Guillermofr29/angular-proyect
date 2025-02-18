import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as v } from 'uuid';

@Injectable({providedIn: 'root'})

export class DbzService {

  public characters: Character[] = [{
    id: v(),
    name: "Krillin",
    power: 1000,
  },{
    id: v(),
    name: "Gokú",
    power: 10000
  }, {
    id: v(),
    name:"Vegeta",
    power: 7000
  }];


  addChacharacter(character: Character):void{
    const newCharacter: Character = {id: v(), ...character}
    this.characters.push(newCharacter);
  }

  // onDeletFromPadre(index: number){
  deleteCharacterById(id: string){
    this.characters = this.characters.filter(character => character.id !== id);
  }

  constructor() { }

}
