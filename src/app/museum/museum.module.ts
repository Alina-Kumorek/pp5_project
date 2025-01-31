import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchListElementComponent } from './components/search-list-element/search-list-element.component';

import { MuseumService } from './services/museum.service';
import { DepFormComponent } from './components/dep-form/dep-form.component';
import { LocFormComponent } from './components/loc-form/loc-form.component';
import { AdvFormComponent } from './components/adv-form/adv-form.component';
import { MuseumRoutingModule } from './museum-routing.module';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    DepFormComponent,
    LocFormComponent,
    AdvFormComponent,
    SearchListComponent,
    SearchListElementComponent,
    WelcomePageComponent
  ],
  exports: [
    DepFormComponent,
    LocFormComponent,
    AdvFormComponent,
    SearchListComponent,
    WelcomePageComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MuseumRoutingModule,
    HttpClientModule
  ],
  providers: [
    MuseumService
  ]
})

export class MuseumModule { }
