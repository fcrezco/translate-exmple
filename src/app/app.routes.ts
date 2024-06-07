import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'projects',
    loadComponent: () => import('./web-site/projects/projects.component').then(c => c.ProjectsComponent)
  }
];
