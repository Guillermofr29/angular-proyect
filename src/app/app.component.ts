import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent {
  public title: string = 'primerProyecto';
  public saludo: string = 'Hola mundo desde app.component.ts'
}
