import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { en_US, NgZorroAntdModule, NZ_I18N, NzNotificationService } from 'ng-zorro-antd';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './core/auth-guard.service';
import { LoginProviderService } from './core/login-provider.service';
import { LoginComponent } from './login/login.component';
import { CrudService } from './services/crud-service/crud.service';
import { CookieService, LocalStorageService, WindowRef } from './services/localstorage-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { TodosModule } from './components/todos/todos.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule,
    AngularFireModule.initializeApp(environment.firebase, 'electron-app'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AkitaNgDevtools.forRoot(),
    TodosModule
  ],
  providers: [
    CrudService,
    LoginProviderService,
    AuthGuard,
    LocalStorageService,
    CookieService,
    WindowRef,
    NzNotificationService,
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
