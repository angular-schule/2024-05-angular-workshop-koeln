import { Component, inject } from '@angular/core';
import { Book } from '../shared/book';
import { JsonPipe, LowerCasePipe, NgClass } from '@angular/common';
import { BookComponent } from '../book/book.component';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe, LowerCasePipe, BookComponent, NgClass],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  // constructor(private br: BookRatingService) {

  // }

  br = inject(BookRatingService);

  // 🦆
  books: Book[] = [{
    isbn: '000',
    title: 'Angular',
    description: 'Tolles Buch',
    rating: 5
  }, {
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

  doRateUp(book: Book) {
    console.table(book);
  }

  doRateDown(book: Book) {
    console.log(book);
  }
}
