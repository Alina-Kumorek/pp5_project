import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListElementComponent } from './search-list-element.component';

describe('SearchListElementComponent', () => {
  let component: SearchListElementComponent;
  let fixture: ComponentFixture<SearchListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchListElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
