import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.scss'
})
export class BookCreateComponent {

  @Output()
  create = new EventEmitter<Book>();

  bookForm = new FormGroup({

    isbn: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),

    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    description: new FormControl('', {
      nonNullable: true
    })
  }, (c) => {
    // Beispiel
    if (c.value.title === 'jQuery') {
      return { 'ichjQueryNicht': true }
    }
    return null;
  });

  c = this.bookForm.controls;

  isInvalid(control: FormControl) {
    return control.touched && control.invalid;
  }

  // z.B. hasError(c.isbn, 'required')
  hasError(control: FormControl, errorCode: string) {
    return control.touched && control.hasError(errorCode);
  }

  submitForm() {

    const book = {
      ...this.bookForm.getRawValue(),
      rating: 1
    }

    console.log(book);

    this.create.emit(book);

    this.bookForm.reset();

  }

}
