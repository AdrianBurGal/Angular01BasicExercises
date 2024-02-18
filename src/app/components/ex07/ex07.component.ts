import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-ex07',
  standalone: true,
  imports: [NgForOf],
  template: `
      <h1>Exercice 7</h1>
      <h2>*ngFor</h2>
      <h3>Structural directive</h3>
      <b>Numbers:</b>
      <p *ngFor="let n of numbers">
          {{ n }}
      </p>
      <b>Fruits:</b>
      <p *ngFor="let f of fruits">
          {{ f }}
      </p>
  `,
})
export class Ex07Component implements OnInit {
  numbers: number[] = [];
  fruits: string[] = []

  constructor() {
  }

  ngOnInit(): void {
    this.numbers = [1, 5, 8, 24, 32, 11, 55];
    this.fruits = ["pear", "apple", "mango", "watermelon", "kiwi"];
    this.showNumbers();
    this.showFruits();
  }

  showNumbers() {
    this.numbers.sort((a, b) => a - b);
  }

  showFruits() {
    this.fruits.sort((a, b) => a.localeCompare(b));
    this.fruits = this.fruits.map(fruit => {
      return fruit.charAt(0).toUpperCase() + fruit.slice(1);
    });
  }
}
