import { Routes } from '@angular/router';

export const projectRoutes: Routes = [
  {
    path: 'project-one',
    loadComponent: () => import('./project-one/project-one.component').then(c => c.ProjectOneComponent)
  },
  {
    path: 'project-two',
    loadComponent: () => import('./project-two/project-two.component').then(c => c.ProjectTwoComponent)
  }
];
