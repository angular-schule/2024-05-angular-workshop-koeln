import { TestBed } from '@angular/core/testing';

import { BookStoreService } from './book-store.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('BookStoreService', () => {
  let service: BookStoreService;

  beforeEach(() => {

    // so könnte ein Stub für den HttpClient aussehen
    const httpMock = {
      get: () => of([]),
      post: () => of()
    }

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpMock }
      ]
    });
    service = TestBed.inject(BookStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
