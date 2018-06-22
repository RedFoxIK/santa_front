import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

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
