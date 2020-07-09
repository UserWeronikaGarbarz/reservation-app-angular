import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onCreatePost(postData: { name: string; surname: string; email: string}): void {
    this.http.post('https://lit-crag-25227.herokuapp.com/v1/reservations', postData).subscribe(responseData =>
    {
      console.log(responseData);
    });
  }
}
