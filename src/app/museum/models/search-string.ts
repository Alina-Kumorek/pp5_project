import { SearchType } from "../enums/search-type";

export class SearchString {
    searchType: SearchType;
    searchQuery: string;

    constructor(searchType: SearchType, searchQuery: string) {
        this.searchType = searchType;
        this.searchQuery = searchQuery;
    }
}
