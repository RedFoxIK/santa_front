import {Routes} from '@angular/router';
import { ComponentFixture } from '@angular/core/testing';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent
    },
    {
        path: '1',
        pathMatch: 'full',
        component: FooterComponent
    }
];
