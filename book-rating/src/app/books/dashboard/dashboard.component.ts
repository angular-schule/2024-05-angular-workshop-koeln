import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Book } from '../shared/book';
import { JsonPipe, LowerCasePipe, NgClass } from '@angular/common';
import { BookComponent } from '../book/book.component';
import { BookRatingService } from '../shared/book-rating.service';
import { BookCreateComponent } from '../book-create/book-create.component';
import { BookStoreService } from '../shared/book-store.service';
import { Store } from '@ngrx/store';
import { selectBooks, selectBooksLoading } from '../store/book.selectors';

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


  books$$ = inject(Store).selectSignal(selectBooks);
  loading$$ = inject(Store).selectSignal(selectBooksLoading);





  // br = inject(BookRatingService);
  // bs = inject(BookStoreService);

  constructor() {
    // const subscription = this.bs.getBooks().subscribe(books => this.books = books);
    // // subscription.unsubscribe(); // NICHT NOTWENDIG
  }

  // 🦆
  // books: Book[] = [];

  doRateUp(book: Book) {
    // const ratedBook = this.br.rateUp(book);
    // // const ratedBook = {
    // //   ...book,
    // //   rating: Math.min(book.rating + 1, 5)
    // // }
    // this.updateAndSort(ratedBook);
  }

  doRateDown(book: Book) {
    // const ratedBook = this.br.rateDown(book);
    // this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book) {
    // this.books = this.books
    //   .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
    //   .sort((a, b) => b.rating - a.rating);
  }

  addBook(book: Book) {
    // this.books = [...this.books, book];
  }
}
