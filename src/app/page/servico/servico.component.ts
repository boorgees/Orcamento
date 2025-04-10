import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servico',
  standalone: true,
  imports: [],
  templateUrl: './servico.component.html',
  styleUrl: './servico.component.css'
})
export class ServicoComponent {
  @Input() nome: string = '';
  @Input() descricao: string = '';
  @Input() preco: string = '';
}
