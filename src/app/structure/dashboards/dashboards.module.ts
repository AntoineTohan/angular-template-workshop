import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';

import { DashboardsAlpha } from './alpha.page';
import {AppsProfile} from '../apps/profile.page';
import {ProduitComponent} from '../apps/produit.page';
import {AssociationComponent} from '../apps/association.page';


// export const routes: Routes = [
//     { path: 'dashboards',
//         children: [
//             { path: 'profile', component: AppsProfile},
//             { path: 'association', component: AssociationComponent},
//             { path: 'produit', component: ProduitComponent},
//         ], component: DashboardsAlpha
//     }
// ];

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardsAlpha,

  ]

})

export class DashboardsModule { }
