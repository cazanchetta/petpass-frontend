import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  clientes: Array<any>;
  cliente: any;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.cliente = {};
    this.service.listar().subscribe(resposta => this.clientes = resposta);
  }

  criar(frm) {
    this.service.criar(this.cliente).subscribe(resposta => {
      this.clientes.push(resposta);
      frm.reset;
    });
  }

  geraCobranca(idCliente) {
    this.service.geraCobranca(idCliente).subscribe();
  }

}
