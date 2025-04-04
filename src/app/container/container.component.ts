import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContatoComponent } from '../contato/contato.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-container',
  imports: [FormsModule, ContatoComponent, CommonModule],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  title: string = "Contatos";

  lista: String[] = [];

  nome: string = '';
  telefone: string = '';
  email: string = '';
  valor: number = 0;
  descricao: string = '';

  addToList() {
    const valorFormatado = this.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const dataAtual = new Date().toLocaleDateString('pt-BR');


    this.lista.push(`Nome: ${this.nome} - Telefone: ${this.telefone} - Descrição: ${this.descricao} - E-mail: ${this.email} - Valor: ${valorFormatado} - Data: ${dataAtual}`);
    this.nome = '';
    this.telefone = '';
    this.email = '';
    this.valor = 0;
    // this.data = new Date ();
  }


  // dados:any;

  // constructor(private http: HttpClient)  {}

  // ngOnInit():void {
  //   this.obterPrevisoes();
  // }

  // obterPrevisoes():void {
  //   let url = "http://localhost:5048/WeatherForecast";
  //   this.http.get(url).subscribe({
  //     // Funcionou a requisição
  //     next: (response) => {
  //       this.dados = response;
  //       console.log(this.dados);
  //     },
  //     // Deu ruim!
  //     error: (erro) => {
  //       alert("Deu ruim!");
  //       console.log(`Erro ao obter as previsões: ${erro}`)
  //     }
  //   });
  // }

}