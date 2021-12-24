import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './Components/administration/administration.component';
import { AuthenticateComponent } from './Components/authenticate/authenticate.component';
import { ClientSpaceComponent } from './Components/client-space/client-space.component';
import { CreateAccountComponent } from './Components/create-account/create-account.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/authentificate', component: AuthenticateComponent },
  { path: 'home/createaccount', component: CreateAccountComponent },
  { path: 'administrator', component: AdministrationComponent },
  { path: 'client', component: ClientSpaceComponent },
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
