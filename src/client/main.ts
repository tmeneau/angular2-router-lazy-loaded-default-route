import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/';

import './style.css';

platformBrowserDynamic().bootstrapModule(AppModule);
