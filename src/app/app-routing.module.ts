import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

const routes: Routes = [
  {
  path: "", 
  component: HomeComponent, 
  title: 'Reservation App'
  },
  {
    path: "new", 
    component: ReservationFormComponent, 
    title: 'Reservation Form'
  },
  {
    path: "list", 
    component: ReservationListComponent, 
    title: 'Reservation List'
  }, 
  {
    path:"edit/:id", 
    component: ReservationFormComponent, 
    title: 'Edit Reservation'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
