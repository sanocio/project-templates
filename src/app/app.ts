import { Component, signal, OnInit } from '@angular/core';
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
export class App implements OnInit {
  title = 'ProjectPage';
  currentPage = signal<number>(0);
  CurrentLanguage = signal<string>('hu');
  translations = translations;

  ngOnInit() {
    this.setLanguage('hu');
  }

  setLanguage(lang: string) {
    this.CurrentLanguage.set(lang);
  }
  setPage(page: number) {
    this.currentPage.set(page);
  }

  getTranslation(key: string): string {
    return translations[this.CurrentLanguage() as keyof Translation][key as keyof TranslationContent] || '';
  }
}
export interface Translation {
  hu: TranslationContent;
  en: TranslationContent;
  //de: TranslationContent;
}
export interface TranslationContent {
  title: string;
  description:string;
  us: string;
  page1: string;
  page2: string;
}
const translations: Translation = {
  hu: {
    title: "Cím",
    description:"Ez egy minta oldal egy Angular keretrendszerrel készült alkalmazáshoz.",
    us: "Rólunk",
    page1: "Oldal 1",
    page2: "Oldal 2"
  },
  en: {
    title: "Title",
    description:"This is a sample page for an application built with the Angular framework.",
    us: "About Us",
    page1: "Page 1",
    page2: "Page 2"
  }//,
  //de: {
  //  title: "Titel",
  //  page1: "Seite 1",
  //  page2: "Seite 2"
  //}
};