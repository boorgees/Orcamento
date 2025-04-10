import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContatoComponent } from '../contato/contato.component';
import { ServicoComponent } from '../../page/servico/servico.component';

interface Contato {
  nome: string;
  email: string;
  telefone: string;
}

interface Servico {
  nome: string;
  descricao: string;
  preco: string;
}

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [ContatoComponent, ServicoComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})

export class ContainerComponent implements OnInit {
  dados: any;
  contatosApi: Contato[] = [];
  servicosApi: Servico[] = [];

  constructor(private http: HttpClient) {
    console.log('ContainerComponent construído');
  }

  ngOnInit(): void {
    console.log('ContainerComponent inicializado');
    this.obterContatos();
    this.obterServicos();
  }

  // BUSCA OS SERVICIOS NA API
  obterServicos() {
    let url = 'http://localhost:5128/api/Servicos';
    this.http.get<Servico[]>(url).subscribe({
      next: (response) => {
        console.log('Dados recebidos da API:', response);
        this.servicosApi = response;
        console.log('servicosApi atualizado:', this.servicosApi);
      },
      error: (erro) => {
        console.error('Erro ao buscar servicos:', erro);
        alert('Ocorreu um erro ao buscar os servicos na api => /api/Servicos');
      },
    });
  }

  // BUSCA OS CONTATOS NA API
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

  removeItem(index: number) {
    this.contatosApi.splice(index, 1);
  }

  addItem() {
    this.contatosApi.push({ nome: 'Novo contato', email: ' ', telefone: ' ' });
  }

  @Input() titulo: string = 'Contatos';
  @Input() descricao: string = 'Contatos para realização de orçamentos';
  @Input() notaRodape: string = 'Nota de rodapé importante!';
}
