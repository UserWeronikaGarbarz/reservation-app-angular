import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onCreateTable(postTable: { tableNumber: number; seatsQuantity: number}): void {
    this.http.post('https://lit-crag-25227.herokuapp.com/v1/tables', postTable).subscribe(
      response =>
      {
        console.log(response);
      });
  }
}
