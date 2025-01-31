import { Department } from "../enums/department";
import { SearchType } from "../enums/search-type";
import { ImageSrc } from "./image-src";
import { MuseumObject } from "./museum-object";
import { SearchResult } from "./search-result";
import { SearchString } from "./search-string";

export class Search {
    constructor() {}

    searchType: SearchType = SearchType.search_query;

    q: string = "";
    isHighlight: boolean = false;
    title: boolean = false;
    tags: boolean = false;
    departmentId: Department = Department.any_department;
    isOnView: boolean = false;
    artistOrCulture: boolean = false;
    medium: string = "";
    hasImages: boolean = true;
    geoLocation: string = "";
    dateBegin: number = -8000;
    dateEnd: number = 2024;

    searchResult: SearchResult = new SearchResult;

    randomObjects: MuseumObject[] = [];
    randomObjectIDs: number[] = [];
    randomObjectImgs: ImageSrc[] = [];

    getSearchInfo(): string {
        let msg = "";
        if (this.getSearchString().searchQuery != "") {
            msg = this.getSearchString().searchQuery;
        } else {
            msg = "allDepartments";
        }

        return msg + "\nTotal: " + this.searchResult.total.toString();
    }

    getImgSrc(): ImageSrc {
        if (this.randomObjectImgs.length > 0) {
            return this.randomObjectImgs[Math.floor(Math.random() * this.randomObjectImgs.length)];
        } else {
            return new ImageSrc("no_image.png", "No image available");
        }
    }

    museumObjectToAdd(): number {
        if (this.searchResult.total > 0 && this.searchResult.total > this.randomObjectIDs.length) {
            const arr = this.searchResult.objectIDs.filter( (el) => {
                return this.randomObjectIDs.indexOf(el) < 0;
            });

            console.log(arr);
            
            return arr[Math.floor(Math.random() * arr.length)];
        } else {
            return -1;
        }
    }

    addMuseumObject(museumObject: MuseumObject) {
        this.randomObjects.push(museumObject);
        this.randomObjectIDs.push(museumObject.objectID);
        if (museumObject.primaryImageSmall != "") {
            this.randomObjectImgs.push(
                new ImageSrc(
                    museumObject.primaryImageSmall,
                    "\"" + museumObject.title + "\" by " + museumObject.artistDisplayName
                ));
        }
    }

    getSearchString(): SearchString {
        let query = "";

        if (this.searchType == SearchType.search_query) {

            let searchTerms = [];

            if (this.isHighlight == true) {
            searchTerms.push("isHighlight=true");
            }
            if (this.title == true) {
            searchTerms.push("title=true");
            }
            if (this.tags == true) {
            searchTerms.push("tags=true");
            }
            if (this.departmentId != Department.any_department) {
            searchTerms.push("departmentId=" + this.departmentId.toString());
            }
            if (this.isOnView == true) {
            searchTerms.push("isOnView=true");
            }
            if (this.artistOrCulture == true) {
            searchTerms.push("artistOrCulture=true");
            }
            if (this.medium != "") {
            searchTerms.push("medium=" + this.medium);
            }
            if (this.hasImages == true) {
            searchTerms.push("hasImages=true");
            }
            if (this.geoLocation != "") {
            searchTerms.push("geoLocation=" + this.geoLocation);
            }
            if (this.dateBegin > -8000 || this.dateEnd < 2024) {
            searchTerms.push("dateBegin=" + this.dateBegin.toString());
            searchTerms.push("dateEnd=" + this.dateEnd.toString());
            }

            searchTerms.push("q=" + this.q);

            query = searchTerms.join("&");

        } else {
            if (this.departmentId != Department.any_department) {
                query = "?departmentIds=" + this.departmentId.toString();
            }
        }

        return new SearchString(this.searchType, query);
    }
}
