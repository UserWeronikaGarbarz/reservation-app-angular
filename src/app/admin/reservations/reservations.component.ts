import { Component, OnInit } from '@angular/core';
import {Reservation} from '../../reservation.model';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  loadedReservations = [];

  onFetchReservations(): void {
    this.fetchReservations();
  }
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchReservations();
  }

  // tslint:disable-next-line:typedef
  private fetchReservations() {
    this.http.get<{ [key: string]: Reservation }>('https://lit-crag-25227.herokuapp.com/v1/reservations')
      .pipe(
        map(responseData => {
          const reservationArray: Reservation[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              reservationArray.push({...responseData[key], id: key});
            }
          }
          return reservationArray;
        }))
      .subscribe(reservations =>
      {
        console.log(reservations);
        this.loadedReservations = reservations;
      });
  }
}

