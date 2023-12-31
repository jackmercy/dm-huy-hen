import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

// firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimations(), 
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp({
        "projectId":"dm-huy-hen",
        "appId":"1:667249227561:web:a0693315463a9dc37de938",
        "storageBucket":"dm-huy-hen.appspot.com",
        "apiKey":"AIzaSyCF4IcKxshSgHOjk-kFQh0WHjxzUBkcY2c",
        "authDomain":"dm-huy-hen.firebaseapp.com",
        "messagingSenderId":"667249227561",
        "measurementId":"G-Q17DYEFSC7"})
      )), 
      importProvidersFrom(provideDatabase(() => getDatabase()))
    ]
};
