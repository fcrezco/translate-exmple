import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { childExampleRoutes } from './child-exmple-routes';
import { ChildExampleComponent } from './child-example/child-example.component';

const routes: Routes = [
  {
    path: '',
    component: ChildExampleComponent,
    children: childExampleRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildExampleRoutingModule { }
