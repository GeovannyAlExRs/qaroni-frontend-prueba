import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'qaroni-frontend-prueba-geovanny';

  isAuthorized$!: Observable<boolean>

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  logoutUser(): void {
    this.router.navigate(['/auth/login'])
  }
}
