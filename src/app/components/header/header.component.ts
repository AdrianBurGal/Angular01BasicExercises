import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
      <nav>
          <div class="container">
              <a routerLink="/"><h1>My Website</h1></a>
              <ul>
                  <li><a routerLink="ex01">Exercise 1</a></li>
                  <li><a routerLink="ex02">Exercise 2</a></li>
                  <li><a routerLink="ex03">Exercise 3</a></li>
                  <li><a routerLink="ex04">Exercise 4</a></li>
                  <li><a routerLink="ex05">Exercise 5</a></li>
                  <li><a routerLink="ex06">Exercise 6</a></li>
                  <li><a routerLink="ex07">Exercise 7</a></li>
                  <li><a routerLink="ex08">Exercise 8</a></li>
                  <li><a routerLink="ex09">Exercise 9</a></li>
                  <li><a routerLink="ex10">Exercise 10</a></li>
                  <li><a routerLink="exExam">Exercise Exam</a></li>
              </ul>
          </div>
      </nav>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
