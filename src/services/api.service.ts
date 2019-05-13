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

  get(): Promise<any> {
    return new Promise(result => {
      this.http.get(`${this.url}consultar`)
        .subscribe(res => {
          result(res);
        });
    });
  }

  getById(body): Promise<any> {
    return new Promise(result => {
      this.http.get(`${this.url}consultarid`, body)
        .subscribe(res => {
          result(res);
        });
    });
  }

  post(body): Promise<any> {
    return new Promise(result => {
      this.http.post(`${this.url}inserir`, body)
        .subscribe(res => {
          result(res);
        });
    });
  }

  put(body): Promise<any> {
    return new Promise(result => {
      this.http.put(`${this.url}editar`, body)
        .subscribe(res => {
          result(res);
        });
    });
  }

  delete(body): Promise<any> {
    return new Promise(result => {
      this.http.delete(`${this.url}deletar`, body)
        .subscribe(res => {
          result(res);
        });
    });
  }
}
