import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInComponent } from './check-in/check-in.component';
import { HomepageComponent } from './homepage.component';
import { InFlightComponent } from './in-flight/in-flight.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      { path: '', redirectTo: 'check-in', pathMatch: 'full' },
      { path: 'check-in', component: CheckInComponent },
      { path: 'in-flight', component: InFlightComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
