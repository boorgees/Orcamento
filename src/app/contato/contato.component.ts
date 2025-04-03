import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  imports: [CommonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

  @Input() lista: String[] = [];

  removeItem(index: number) {
    this.lista.splice(index, 1);
  }
}
