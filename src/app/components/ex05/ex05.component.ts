import {Component} from '@angular/core';
import {UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-ex05',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule
  ],
  template: `
    <h1>Exercice 5</h1>
    <h2>Data input:</h2>
    <button (click)="clearWord()">Reset</button>
    <input type="text" [(ngModel)]="word">
    <h1>{{ word | uppercase }}</h1>
  `,
})
export class Ex05Component {
  word: string = "init...";

  constructor() {
  }

  ngOnInit(): void {
  }

  clearWord() {
    this.word = "";
  }
}
