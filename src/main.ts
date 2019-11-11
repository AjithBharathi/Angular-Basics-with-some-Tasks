import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { TaskModule } from './app/task/task.module';
import { MeanstackModule } from './app/meanstack/meanstack.module';
import { FirebaseModule } from './app/firebase/firebase.module';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log("hi...."+err));
