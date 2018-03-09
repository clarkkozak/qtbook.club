import { Component } from '@angular/core';

import {book, author} from './test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = "Quantum Book Club";
    book = book;
    author = author;
}