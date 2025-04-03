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

  addToList() {
    this.lista.push(`Nome: ${this.nome} - Telefone: ${this.telefone} - E-mail: ${this.email}`);
    this.nome = '';
    this.telefone = '';
    this.email = '';
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