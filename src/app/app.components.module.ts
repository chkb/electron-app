import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
    exports: [
        AppComponent,
        DashboardComponent
    ]
})
export class AppComponentsModule { }
