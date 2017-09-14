import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ChartsModule } from './charts/charts.module';
import { DashboardsModule } from './dashboards/dashboards.module';
import {AppsProfile} from './apps/profile.page';
import {AssociationComponent} from './apps/association.page';
import {ProduitComponent} from './apps/produit.page';




@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    DashboardsModule
  ],
  declarations: [
      AppsProfile,
      AssociationComponent,
      ProduitComponent
  ]
})
export class StructureModule { }
