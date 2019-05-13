import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {
  public pessoa = {
    nome: '',
    sobrenome: '',
    cpf: ''
  }

  public msg: any[] = [];
  public success: string;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  create() {
    this.pessoa.cpf = this.pessoa.cpf.replace('.', '').replace('.', '').replace('-', '');
    this.api.post(this.pessoa)
    .then(res => {
      this.success = res.success;

      if (res.success) {
        this.msg.push(res.msg);
      } else {
        this.msg = res.msg;
      }
    });
  }

}
