import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { PwaApp } from './app.component';
import { PWAConfig } from "./app.pwa.config";
import { DirectivesModule } from "../directives/directives.module";


@NgModule({
  declarations: [
    PwaApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(PwaApp, PWAConfig.APP_CONFIG),
    DirectivesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PwaApp
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
