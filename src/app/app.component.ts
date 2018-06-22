import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
        if (this.isLogInUser()) {
            this.router.navigateByUrl('/home');
        } else {
            this.router.navigateByUrl('/login');
        }
    }

    private isLogInUser(): boolean {
        return false;
    }
}
