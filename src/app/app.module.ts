import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LaunchPage } from '../pages/launch/launch';
import { ProfilPage } from '../pages/profil/profil';
import { DrinkPage } from '../pages/drink/drink';
import { ListPage } from '../pages/list/list';
import { PolicyPage } from '../pages/policy/policy';
import { TimePage } from '../pages/time/time';
import { ResultPage } from '../pages/result/result';

@NgModule({
  declarations: [
    MyApp,
    LaunchPage,
    ProfilPage,
    DrinkPage,
    ListPage,
    PolicyPage,
    TimePage,
    ResultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LaunchPage,
    ProfilPage,
    DrinkPage,
    ListPage,
    PolicyPage,
    TimePage,
    ResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
