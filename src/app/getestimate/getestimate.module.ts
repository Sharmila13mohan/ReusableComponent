import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { GetestimateComponent } from '../getestimate/getestimate.component';

const routes: Routes = [
  { path: '', component: GetestimateComponent }
];

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class GetestimateModule { }
