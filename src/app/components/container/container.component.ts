import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContatoComponent } from '../contato/contato.component';

interface Contato {
  nome: string;
  email: string;
  telefone: string;
}

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [ContatoComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})

export class ContainerComponent implements OnInit {
  dados: any;
  contatosApi: Contato[] = [];
  servicosApi: any;

  constructor(private http: HttpClient) {
    console.log('ContainerComponent construído');
  }

  ngOnInit(): void {
    console.log('ContainerComponent inicializado');
    this.obterContatos();
  }

  obterContatos() {
    console.log('Iniciando busca de contatos...');
    let url = 'http://localhost:5128/api/Contatos';
    this.http.get<Contato[]>(url).subscribe({
      next: (response) => {
        console.log('Dados recebidos da API:', response);
        this.contatosApi = response;
        console.log('contatosApi atualizado:', this.contatosApi);
      },
      error: (erro) => {
        console.error('Erro ao buscar contatos:', erro);
        alert('Ocorreu um erro ao buscar os contatos na api => /api/Contatos');
      },
    });
  }

  // obterPrevisoes(): void {
  //   let url = 'http://localhost:5048/WeatherForecast';
  //   this.http.get(url).subscribe({
  //     // Funcionou a requisição
  //     next: (response) => {
  //       this.dados = response;
  //       console.log(this.dados);
  //     },
  //     // Deu ruim!
  //     error: (erro) => {
  //       alert('Deu ruim!');
  //       console.log(`Erro ao obter as previsões: ${erro}`);
  //     },
  //   });
  // }

  // obterDados():void {
  //   let endpoint = "https://localhost:7299/WeatherForecast";
  //   this.http.get(endpoint).subscribe({
  //     next: (response) =>{
  //       this.dados = response;
  //       console.log(this.dados);
  //     },
  //     error: (erro) => {
  //       console.log('Erro ao obter dados: ' + erro)
  //     }
  //   });
  // }

  removeItem(index: number) {
    this.contatosApi.splice(index, 1);
  }

  addItem() {
    this.contatosApi.push({ nome: 'Novo contato', email: ' ', telefone: ' ' });
  }

  @Input() titulo: string = 'Contatos';
  @Input() descricao: string = 'Contatos para realização de orçamentos';
  @Input() notaRodape: string = 'Nota de rodapé importante!';

  contatos: Array<ContatoComponent> = [
    // {
    //   nome: 'Marco Antonio Angelo',
    //   email: 'marco.angelo@gmail.com',
    //   telefone: '(47) 99171-0879',
    // },
    // {
    //   nome: 'José da Silva',
    //   email: 'jose.silva@gmail.com',
    //   telefone: '(47) 99171-0879',
    // },
    // {
    //   nome: 'Maria Antonio',
    //   email: 'maria.antonio@gmail.com',
    //   telefone: '(47) 99171-0879',
    // },
    // {
    //   nome: 'Catarina Bailarina',
    //   email: 'catarina.bailarina@gmail.com',
    //   telefone: '(47) 99171-0879',
    // },
  ];
}
