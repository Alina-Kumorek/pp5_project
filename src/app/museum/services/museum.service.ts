import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Search } from '../models/search';
import { SearchResult } from '../models/search-result';
import { MuseumObject } from '../models/museum-object';
import { SearchType } from '../enums/search-type';
import { SearchString } from '../models/search-string';

@Injectable({
  providedIn: 'root'
})
export class MuseumService {

  private searchList: Search[] = [];
  private baseUrlSearch: string = "https://collectionapi.metmuseum.org/public/collection/v1/search?";
  private baseUrlDepartment: string = "https://collectionapi.metmuseum.org/public/collection/v1/objects";
  private baseUrlObject: string = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

  constructor(
    private httpClient: HttpClient
  ) { }

  addSearch(search: Search) {
    this.go(search.getSearchString()).subscribe((data: SearchResult) => {

      search.searchResult = data;

      this.searchObject(search.museumObjectToAdd()).subscribe((object: MuseumObject) => {

        search.addMuseumObject(object);
      });
    });

    this.searchList.push(search);

  }

  private go(searchString: SearchString): Observable<SearchResult> {

    if (searchString.searchType == SearchType.search_query) {
      return this.httpClient.get<SearchResult>(this.baseUrlSearch + searchString.searchQuery);
    } else {
      return this.httpClient.get<SearchResult>(this.baseUrlDepartment + searchString.searchQuery);
    }

    

  }

  // private randomObjectId(searchResult: SearchResult): number {
  //   return searchResult.objectIDs[
  //     Math.floor(Math.random() * searchResult.objectIDs.length)
  //   ];
  // }

  private searchObject(objectId: number): Observable<MuseumObject> {
    return this.httpClient.get<MuseumObject>(
      this.baseUrlObject + objectId.toString()
    )
  }

  getSearches(): Search[] {
    return this.searchList;
  }
}
