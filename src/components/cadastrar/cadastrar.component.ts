import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {
  public name: string;
  public sobrenome: string;
  public cpf: string;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  create() {
    this.api.get()
    .then(res => {
      console.log(res);
    });
  }

}
