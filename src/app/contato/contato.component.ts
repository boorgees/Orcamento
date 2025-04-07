import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  imports: [CommonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

  // @Input() lista: String[] = [];

  @Input() nome: string = '';
  @Input() email: string = '';
  @Input() telefone: string = '';

}
