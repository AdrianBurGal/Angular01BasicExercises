import {Component, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-ex03',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `
    <h1>Exercice 3</h1>
    <p [ngClass]="getClass()">Random between 1 and 10: {{ n }}</p>
  `,
  styles: `
    .fail {color: red;}
    .pass {color: green;}
    .perfect {color: blue;}
  `
})
export class Ex03Component implements OnInit {
  n: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.n = Math.floor(Math.random() * 10 + 1);
  }

  getClass() {
    if (this.n < 5) {
      return 'fail';
    } else if (this.n === 10) {
      return 'perfect';
    } else {
      return 'pass';
    }
  }
}
