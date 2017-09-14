import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AppsProfile} from './structure/apps/profile.page';
import {ProduitComponent} from './structure/apps/produit.page';
import {AssociationComponent} from './structure/apps/association.page';
import {AuthGuard} from './structure/apps/guards/auth.guard';
import {RegisterComponent} from './structure/apps/register/register.component';
import {DashboardsAlpha} from './structure/dashboards/alpha.page';
import {LoginComponent} from './structure/apps/login/login.component';

export const routes: Routes = [
  { path: '', component : DashboardsAlpha},
  { path: '**', redirectTo: 'pages/page-404' },
    { path: 'profile', component: AppsProfile, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'produit', component: ProduitComponent},
    { path: 'association', component: AssociationComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
