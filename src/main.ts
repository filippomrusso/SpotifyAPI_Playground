import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import localeIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

registerLocaleData(localeIt);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
