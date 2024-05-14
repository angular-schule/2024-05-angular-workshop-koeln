import { Component } from '@angular/core';
import { Book } from '../shared/book';
import { JsonPipe, LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe, LowerCasePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  // 🦆
  books: Book[] =  [{
    isbn: '000',
    title: 'Angular',
    description: 'Tolles Buch',
    rating: 5
  } as Book, {
    isbn: '111',
    title: 'AngularJs',
    description: 'Altes Buch',
    rating: 3
  }, {
    isbn: '222',
    title: 'jQuery',
    description: 'Sehr, sehr altes Buch',
    rating: 1
  }];
}
