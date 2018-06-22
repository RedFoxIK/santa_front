import {Routes} from '@angular/router';
import { ComponentFixture } from '@angular/core/testing';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavigatorComponent } from './components/navigator/navigator.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: NavigatorComponent
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
    },
    {
        path: '**',
        pathMatch: 'full',
        component: PageNotFoundComponent
    }
];
