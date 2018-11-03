import { switchMap } from 'rxjs/operators';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { LoginProviderService } from '../core/login-provider.service';
import { moveIn } from '../router.animations';
import { trigger, transition, style, state, animate } from '@angular/animations';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    animations: [moveIn(),
    trigger('active', [
        state('inactive', style({
            transform: 'scale(0.6)'
        })),
        state('active', style({
            transform: 'scale(1.0)'
        })),
        transition('inactive => active', animate('1000ms ease-in')),
        transition('active => inactive', animate('1000ms ease-out'))
    ])],
    // tslint:disable-next-line:use-host-property-decorator
    host: { '[@moveIn]': '' }
})
export class LoginComponent {
    constructor(
        private loginProvider: LoginProviderService,
        private router: Router
    ) { }

    googleLogin() {
        this.loginProvider.googleLogin();
        this.router.navigate([`/dashboard`]);
    }

    facebookLogin() {
        this.loginProvider.facebookLogin();
        this.router.navigate([`/dashboard`]);

    }
}
