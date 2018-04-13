import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  /*{ path: '', redirectTo: '/foo', pathMatch: 'full' },*/
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    declarations: [
	AppComponent,
	PageNotFoundComponent,
	SignupComponent
    ],
    imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes,{ enableTracing: true } ),
	BrowserAnimationsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
