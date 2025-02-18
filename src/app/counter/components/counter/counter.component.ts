import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="incrementar(-1)">-1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="incrementar(1)">+1</button>
  `
})

export class CounterComponent {
  constructor() { }

  public counter:number = 1;

  incrementar(value: number):void{
      this.counter += value;
  }

  reset():void{
    this.counter = 1;
  }
}


