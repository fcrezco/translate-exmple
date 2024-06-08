import { projectRoutes } from './web-site/projects/projects.routes';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'child-example',
    loadChildren: () => import('./web-site/child-example/child-example.module').then(m => m.ChildExampleModule)
  },
  ...projectRoutes
];
