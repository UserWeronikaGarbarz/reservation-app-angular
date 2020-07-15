import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reservation} from '../../reservation.model';
import {map} from 'rxjs/operators';
import {TableA} from '../../table.model';

@Component({
  selector: 'app-displayedtables',
  templateUrl: './displayedtables.component.html',
  styleUrls: ['./displayedtables.component.css']
})
export class DisplayedtablesComponent implements OnInit {
  loadedTables = [];
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchTables();
  }

  // tslint:disable-next-line:typedef
  private fetchTables() {
    this.http.get<{ [key: string]: TableA }>('https://lit-crag-25227.herokuapp.com/v1/tables')
      .pipe(
        map(responseData => {
          const tableArray: TableA[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              tableArray.push({...responseData[key], id: key});
            }
          }
          return tableArray;
        }))
      .subscribe(tables =>
      {
        console.log(tables);
        this.loadedTables = tables;
      });
  }
}
