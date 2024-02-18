import { Component } from '@angular/core';

@Component({
  selector: 'app-ex04',
  standalone: true,
  imports: [],
  template: `
      <h1>Exercice 4</h1>
      <h2>Events - click</h2>
      <h1>{{ n }}</h1>
      <button (click)="setNumber()">Set number</button>&nbsp;
      <button (click)="incNumber()">+</button>&nbsp;
      <button (click)="decNumber()">-</button>
  `,
})
export class Ex04Component {
  n: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setNumber() {
    this.n = Math.floor(Math.random() * 10 + 1);
  }

  incNumber() {
    this.n++;
  }

  decNumber() {
    this.n--;
  }
}
