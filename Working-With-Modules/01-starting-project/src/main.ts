import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //Is used if working with modules instead of standalone components
import { AppMoudle } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppMoudle);
