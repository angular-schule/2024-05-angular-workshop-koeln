import { Component } from '@angular/core';
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

    // TODO
    // 1. erstelle ein Event mit dem Namen `create`
    // 2. versende das Event mit dem neuen Buch
    // 3. subscribe dich auf das Event im Dashboard
    // 4. füge das neue Buch dem Buch-Array hinzu

    this.bookForm.reset();

  }

}
