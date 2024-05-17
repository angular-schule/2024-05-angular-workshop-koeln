import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Book } from '../shared/book';
import { JsonPipe, LowerCasePipe, NgClass } from '@angular/common';
import { BookComponent } from '../book/book.component';
import { BookRatingService } from '../shared/book-rating.service';
import { BookCreateComponent } from '../book-create/book-create.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe, LowerCasePipe, BookComponent, NgClass, BookCreateComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  // vorsicht: bug!
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  constructor() {
    // setTimeout(() => this.books = [], 3000);
  }

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
    const ratedBook = this.br.rateUp(book);
    // const ratedBook = {
    //   ...book,
    //   rating: Math.min(book.rating + 1, 5)
    // }
    this.updateAndSort(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.br.rateDown(book);
    this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book) {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);
  }
}
