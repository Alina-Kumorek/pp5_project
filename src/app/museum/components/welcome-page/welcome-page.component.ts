import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  standalone: false,
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {

    constructor(
      private router: Router
    ) {}

  redirect(url: string) {
    this.router.navigateByUrl(url);
  }

}
