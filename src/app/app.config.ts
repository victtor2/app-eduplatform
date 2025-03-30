import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes), 
     provideClientHydration(),
     provideHttpClient(), provideFirebaseApp(() => initializeApp({
      "projectId":"app-eduplataform",
      "appId":"1:127140559852:web:4e3674024c20634552dec9",
      "storageBucket":"app-eduplataform.firebasestorage.app",
      "apiKey":"AIzaSyCMlDYEYXZ6gXoPO38CEGcxTqR9qNdG11c",
      "authDomain":"app-eduplataform.firebaseapp.com",
      "messagingSenderId":"127140559852"})),
       provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore())
    ]
};
