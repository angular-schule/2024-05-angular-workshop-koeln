import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { bookFeature } from './books/store/book.reducer';
import { BookEffects } from './books/store/book.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes /*, withDebugTracing()*/),
    provideHttpClient(),
    provideStore(),
    provideEffects(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),

    provideState(bookFeature),
    provideEffects(BookEffects)
]
};
