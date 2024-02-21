import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {Ex01Component} from "./components/ex01/ex01.component";
import {Ex02Component} from "./components/ex02/ex02.component";
import {Ex03Component} from "./components/ex03/ex03.component";
import {Ex04Component} from "./components/ex04/ex04.component";
import {Ex05Component} from "./components/ex05/ex05.component";
import {Ex06Component} from "./components/ex06/ex06.component";
import {Ex07Component} from "./components/ex07/ex07.component";
import {Ex08Component} from "./components/ex08/ex08.component";
import {Ex09Component} from "./components/ex09/ex09.component";
import {Ex10Component} from "./components/ex10/ex10.component";
import {ExExamComponent} from "./components/ex-exam/ex-exam.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,
    Ex01Component, Ex02Component, Ex03Component,
    Ex04Component, Ex05Component, Ex06Component,
    Ex07Component, Ex08Component, Ex09Component,
    Ex10Component, ExExamComponent],
  template: `
    <header>
      <app-header/>
    </header>
    <section id="main">
      <router-outlet/>
    </section>
  `,
})
export class AppComponent {

}
