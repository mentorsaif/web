import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-simple-http-client',
  templateUrl: './simple-http-client.component.html',
  styleUrls: ['./simple-http-client.component.css']
})
export class SimpleHttpClientComponent implements OnInit {

  data: object;
  loading: boolean;
  error: object;
  complete: object;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  makeRequest(): void{
    this.loading = true;
    this.http
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe( data => {
      this.data = data;
      this.loading = false;
    },
    error => {
      this.error = error;
      console.log("http get request returned error");
    },
    () => {
      console.log("http get request completed");
    }
    );
  }

  makePost(): void{
    this.loading = true;
    this.http
    .post('https://jsonplaceholder.typicode.com/posts',
    JSON.stringify({
      body: 'bar',
      title: 'foo',
      userId: 1
    })
    )
    .subscribe( data => {
      this.data = data;
      this.loading = false;
    },
    error => {
      this.error = error;
      console.log("http post request returned error");
    },
    () => {
      console.log("http post request completed");
    }
    );
  }

  makeDelete(): void{
    this.loading = true;
    this.http
    .delete('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe( data => {
      this.data = data;
      this.loading = false;
    },
    error => {
      this.error = error;
      console.log("http delete request returned error");
    },
    () => {
      console.log("http delete request completed");
    }
    );
  }

  makeHeaders(): void{
    const headers: HttpHeaders = new HttpHeaders({
      'X-API-TOKEN': 'ng-book'
    });

    const req = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        headers: headers
      }
    );

    this.http.request(req).subscribe(data => {
      this.data = data['body'];
    })
  }
}