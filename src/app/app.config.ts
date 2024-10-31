import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './app-data';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [    
    provideHttpClient(),
    provideRouter(routes), provideClientHydration(),
    importProvidersFrom(
      FormsModule,
      InMemoryWebApiModule.forRoot(AppData, {delay: 200})
    )
  ]
};
