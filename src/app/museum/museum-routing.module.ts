import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepFormComponent } from './components/dep-form/dep-form.component';
import { LocFormComponent } from './components/loc-form/loc-form.component';
import { AdvFormComponent } from './components/adv-form/adv-form.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: 'dep',
    component: DepFormComponent
  },
  {
    path: 'loc',
    component: LocFormComponent
  },
  {
    path: 'adv',
    component: AdvFormComponent
  },
  {
    path: 'list',
    component: SearchListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuseumRoutingModule { }