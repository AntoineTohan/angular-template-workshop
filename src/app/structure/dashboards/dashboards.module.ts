import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';

import { DashboardsAlpha } from './alpha.page';


export const routes: Routes = [
  { path: 'dashboards/alpha', component: DashboardsAlpha }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardsAlpha,

  ]

})

export class DashboardsModule { }
