import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url = 'http://localhost:3000/api/pessoa/';

  constructor(
    private http: HttpClient
  ) { }

  public createHeader(header?: HttpHeaders): HttpHeaders {
    if (!header) {
      header = new HttpHeaders();
    }
    header = header.append('Content-Type', 'application/json');
    header = header.append('Accept', 'application/json');

    return header;
  }

  get(): Promise<any> {
    let header = this.createHeader();
    return new Promise(result => {
      this.http.get(`${this.url}consultar`, { headers: header })
        .subscribe(res => {
          result(res);
        });
    });
  }

  getById() {
    let header = this.createHeader();
    return new Promise(result => {
      this.http.get(`${this.url}consultar`, { headers: header })
        .subscribe(res => {
          result(res);
        });
    });
  }

  post() {
    let header = this.createHeader();
    return new Promise(result => {
      this.http.get(`${this.url}consultar`, { headers: header })
        .subscribe(res => {
          result(res);
        });
    });
  }

  put() {
    let header = this.createHeader();
    return new Promise(result => {
      this.http.get(`${this.url}consultar`, { headers: header })
        .subscribe(res => {
          result(res);
        });
    });
  }

  delete() {
    let header = this.createHeader();
    return new Promise(result => {
      this.http.get(`${this.url}consultar`, { headers: header })
        .subscribe(res => {
          result(res);
        });
    });
  }
}
