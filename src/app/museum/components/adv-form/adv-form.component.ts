import { Component } from '@angular/core';
import { Search } from '../../models/search';
import { MuseumService } from '../../services/museum.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adv-form',
  standalone: false,
  templateUrl: './adv-form.component.html',
  styleUrl: './adv-form.component.scss'
})
export class AdvFormComponent {
  search: Search = new Search();
  
  constructor(
    private museumService: MuseumService,
    private router: Router
  ) {}
  
  onSubmit(){
    console.log(this.search);

    this.museumService.addSearch(this.search);

    this.router.navigateByUrl("/list");
  }

  redirect(url: string) {
    this.router.navigateByUrl(url);
  }
}
