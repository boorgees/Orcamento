import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContatoComponent } from '../contato/contato.component';

@Component({
  selector: 'app-container',
  imports: [FormsModule, ContatoComponent],
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
}