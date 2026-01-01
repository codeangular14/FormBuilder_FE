import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), 
    provideStore(), 
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
});

// bootstrapApplication(App, {
//   providers: [
//     provideRouter(routes)
//   ]
// }).catch(err => console.error(err));
