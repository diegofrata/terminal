import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { TerminalModule } from './terminal/terminal.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(TerminalModule)
  .catch(err => console.log(err));
