import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BaseRequestOptions, HttpModule} from '@angular/http';
import { Router, NavigationStart, NavigationEnd, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { TopBarComponent} from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';

import { StructureModule } from './structure/structure.module';
import {RegisterComponent} from './structure/apps/register/register.component';
import {AuthGuard} from './structure/apps/guards/auth.guard';
import {AlertService} from './structure/apps/services/alert.service';
import {AuthenticationService} from './structure/apps/services/authentication.service';
import {UserService} from './structure/apps/services/user.service';
import {MockBackend} from '@angular/http/testing';
import {fakeBackendProvider} from './structure/apps/helpers/fake-backend';
import {LoginComponent} from "./structure/apps/login/login.component";


declare var NProgress: any;

@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        FooterComponent,
        RegisterComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        StructureModule,
        NgbModule.forRoot(),
        routing
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor(private router: Router) {
    router.events.subscribe((event) => {

      if(event instanceof NavigationStart) {
        NProgress.start();
      }

      if(event instanceof NavigationEnd) {
        setTimeout(function(){
          NProgress.done();
        }, 200);
      }

    });
  }
}
