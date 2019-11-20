import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetestimateComponent } from './getestimate/getestimate.component';
import { LoginComponent } from './core/login/login.component';
import { AlertboxComponent } from './core/alertbox/alertbox.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
  path: 'home', component: HomeComponent
},
{
  path: 'estimate', component: GetestimateComponent
},
{
  path: 'login', component: LoginComponent
},
{
  path: 'alert', component: AlertboxComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
