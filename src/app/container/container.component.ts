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
  // // solução que eu tinha feito
  // lista: String[] = [];
  // nome: string = '';
  // telefone: string = '';
  // email: string = '';
  // valor: number = 0;
  // descricao: string = '';

  //solução do professor em aula
  dados: any;
  contatosApi: any;
  servicosApi: any;
  contatos: Array<Contato> = [];

  addToList() {
  //   const valorFormatado = this.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  //   const dataAtual = new Date().toLocaleDateString('pt-BR');


  //   this.lista.push(`Nome: ${this.nome} - Telefone: ${this.telefone} - Descrição: ${this.descricao} - E-mail: ${this.email} - Valor: ${valorFormatado} - Data: ${dataAtual}`);
  //   this.nome = '';
  //   this.telefone = '';
  //   this.email = '';
  //   this.valor = 0;
  //   // this.data = new Date ();
  }

  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.obterPrevisoes();
    this.obterContatos();
  }

  obterContatos() {
    let url = 'http://localhost:5048/api/Contatos';
    this.http.get(url).subscribe({
      next: (response) => {
        this.contatosApi = response;
        for (let contato of this.contatosApi) {
          console.log(contato);
          this.contatos.push({
            nome: contato.nome,
            email: contato.email,
            numero: contato.numero,
          });
        }
      },
      error: (erro) => {
        alert('Ocorreu um erro ao buscar os contatos na api => /api/Contatos');
        console.log(`Ocorreu um erro ao realizar a requisição: ${erro}`);
      },
    });
  }

  removeItem(index: number) {
    this.contatos.splice(index, 1);
  }
}

interface Contato {
  nome: string;
  email: string;
  numero: string;
}