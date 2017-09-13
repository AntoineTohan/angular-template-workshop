import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ChartsModule } from './charts/charts.module';
import { DashboardsModule } from './dashboards/dashboards.module';


@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    DashboardsModule
  ]
})
export class StructureModule { }
