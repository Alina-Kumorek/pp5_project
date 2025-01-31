import { Component, Input, Output } from '@angular/core';
import { Search } from '../../models/search';

@Component({
  selector: 'app-search-list-element',
  standalone: false,
  templateUrl: './search-list-element.component.html',
  styleUrl: './search-list-element.component.scss'
})
export class SearchListElementComponent {

  @Input()
  search: Search = new Search();

  // @Output()
  // deletedCustomerEvent = new EventEmitter<Customer>();

}
