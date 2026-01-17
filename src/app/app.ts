import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index';
import { Page1 } from './pages/page1/page1';
import { Page2 } from './pages/page2/page2';
import { Page3 } from './pages/page3/page3';
import { Page4 } from './pages/page4/page4';
import { Page5 } from './pages/page5/page5';
import { Page6 } from './pages/page6/page6';
import { Page7 } from './pages/page7/page7';
import { Page8 } from './pages/page8/page8';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    IndexComponent,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'ProjectPage';
  currentPage = signal<number>(0);

  setPage(page: number) {
    this.currentPage.set(page);
  }
}
