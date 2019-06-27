import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {WelcomeComponent} from './welcome/welcome.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: WelcomeComponent },
  { path: 'createnew', component: ContactComponent },
  { path: ':updateincident', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
