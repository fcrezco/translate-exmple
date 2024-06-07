import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'projects',
    loadComponent: () => import('./web-site/projects/projects.component').then(c => c.ProjectsComponent)
  },
  {
    path: 'child-example',
    loadChildren: () => import('./web-site/child-example/child-example.module').then(m => m.ChildExampleModule)
  }
];
