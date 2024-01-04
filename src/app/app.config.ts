import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"todo-list-8a8b0","appId":"1:5233612788:web:548aa83db4df8b94898ba1","storageBucket":"todo-list-8a8b0.appspot.com","apiKey":"AIzaSyAt7-oJdVOE56myPztyR7J8KcC8QcBKqeQ","authDomain":"todo-list-8a8b0.firebaseapp.com","messagingSenderId":"5233612788","measurementId":"G-RFX33L981S"}))),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, UserTrackingService,
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"todo-list-8a8b0","appId":"1:5233612788:web:548aa83db4df8b94898ba1","storageBucket":"todo-list-8a8b0.appspot.com","apiKey":"AIzaSyAt7-oJdVOE56myPztyR7J8KcC8QcBKqeQ","authDomain":"todo-list-8a8b0.firebaseapp.com","messagingSenderId":"5233612788","measurementId":"G-RFX33L981S"}))), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"todo-list-8a8b0","appId":"1:5233612788:web:548aa83db4df8b94898ba1","storageBucket":"todo-list-8a8b0.appspot.com","apiKey":"AIzaSyAt7-oJdVOE56myPztyR7J8KcC8QcBKqeQ","authDomain":"todo-list-8a8b0.firebaseapp.com","messagingSenderId":"5233612788","measurementId":"G-RFX33L981S"}))), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, importProvidersFrom(provideFirestore(() => getFirestore()))
  ]
};
