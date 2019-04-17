import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosFiltersComponent } from './filters/filters.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo.component';
import { TodosPageComponent } from './todos/todos-page/todos-page.compenent';

@NgModule({
  declarations: [
    TodosFiltersComponent,
    TodosComponent,
    TodoComponent,
    TodosPageComponent,
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    environment.production ?
      [] :
      [AkitaNgDevtools.forRoot(), AkitaNgRouterStoreModule.forRoot()],
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
