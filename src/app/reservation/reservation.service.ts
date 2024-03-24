import { Injectable } from '@angular/core';
import { ReservationModule } from './reservation.module';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = []; 

  //the constructor is getting  loaded before the ngInit lifecycle hook.  
  constructor( ) {
    let savedReservation = localStorage.getItem("reservations");
      //if savedReservation have value then parse the vlaue if not then keep it as an empty array.   
    this.reservations = savedReservation? JSON.parse(savedReservation): []
   }
 
  //CRUD: 

  addReservation(reservation: Reservation): void {

    reservation.id = Date.now().toString();

    this.reservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }
  getReservations(): Reservation[] {
    return this.reservations;
  }
  //read one
  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }

  updateReservation(id: string, updatedReservation: Reservation): void{
    
    let index = this.reservations.findIndex(res => res.id === id); 
    this.reservations[index] = updatedReservation
    localStorage.setItem("reservations", JSON.stringify(this.reservations))

  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index,1)
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

}
