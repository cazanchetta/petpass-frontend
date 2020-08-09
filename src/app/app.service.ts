  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  clientesUrl = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Array<any>>(this.clientesUrl);
  }

  criar(cliente: any) {
    return this.http.post(this.clientesUrl, cliente);
  }

  geraCobranca(idCliente: any) {
    let  url = this.clientesUrl + '/cobranca/' + idCliente;
    return this.http.post(url, idCliente);
  }

}