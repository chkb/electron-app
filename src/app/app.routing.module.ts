import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './core/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { TodosPageComponent } from './components/todos/todos-page/todo.component';


const routes: Route[] = [
    {
        path: '',
        redirectTo: '/todos',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            breadcrumb: 'login'
        },
    },
    {
        path: 'todos',
        component: TodosPageComponent,
        data: {
            breadcrumb: 'todo'
        },
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        data: {
            breadcrumb: 'dashboard'
        },
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
