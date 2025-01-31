import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./museum/museum.module').then(m => m.MuseumModule)
      }
];
