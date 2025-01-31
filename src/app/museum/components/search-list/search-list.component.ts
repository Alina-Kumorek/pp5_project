import { Component } from '@angular/core';
import { Search } from '../../models/search';
import { MuseumService } from '../../services/museum.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-list',
  standalone: false,
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.scss'
})
export class SearchListComponent {

  searchList: Search[] = []

  constructor(
    private museumService: MuseumService,
    private router: Router
  ){
    this.searchList = this.museumService.getSearches();

    console.log(this.searchList);
  }

  redirect(url: string) {
    this.router.navigateByUrl(url);
  }

}
