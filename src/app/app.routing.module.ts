import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MemberComponent } from './components/member/member.component';
import { SkillComponent } from './components/skills/skill.component';
import { TeamComponent } from './components/team/team.component';
import { AuthGuard } from './core/auth-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Route[] = [
    {
        path: '',
        redirectTo: '/dashboard',
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
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        data: {
            breadcrumb: 'dashboard'
        },
    },
    {
        path: 'team/:teamId',
        component: TeamComponent,
        canActivate: [AuthGuard],
        data: {
            breadcrumb: 'team'
        },
    },
    {
        path: 'team/:teamId/member/:memberId',
        component: MemberComponent,
        canActivate: [AuthGuard],
        data: {
            breadcrumb: 'member'
        },
    },
    {
        path: 'skills',
        component: SkillComponent,
        canActivate: [AuthGuard],
        data: {
            breadcrumb: 'skills'
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
