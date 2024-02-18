import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-ex06',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>Exercice 6</h1>
    <h2>Fahrenheit/Celsius conversion</h2>
    Celcius:
    <input [(ngModel)]="celcius" (keydown)="convertToFahrenheit($event)">
    <br>
    Fahrenheit:
    <input [(ngModel)]="fahrenheit" (keydown)="convertToCelcius($event)">
    <br>
    <button (click)="clear()">Reset</button>
  `,
})
export class Ex06Component implements OnInit {

  celcius: number | null = 0;
  fahrenheit: number | null = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.celcius = null;
    this.fahrenheit = null;
  }

  clear() {
    this.celcius = 0;
    this.fahrenheit = 0;
  }

  convertToCelcius(event: KeyboardEvent) {
    if (this.onKeyDown(event) && this.fahrenheit != null) {
      this.celcius = (this.fahrenheit - 32) * 5 / 9;
    }
  }

  convertToFahrenheit(event: KeyboardEvent) {
    if (this.onKeyDown(event) && this.celcius != null) {
      this.fahrenheit = this.celcius * 9 / 5 + 32;
    }
  }

  onKeyDown(event: KeyboardEvent): boolean {
    const allowedChars = /[0-9]/;
    if (!allowedChars.test(event.key)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

}
