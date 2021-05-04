import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page001Component } from './pages/page001/page001.component';
import { Page002Component } from './pages/page002/page002.component';

const routes: Routes = [
  {
    path: 'page-001',
    component: Page001Component,
  },

  {
    path: 'page-002',
    component: Page002Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
