import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ContainerComponent } from './container/container.component';
import { ContatoComponent } from './contato/contato.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, ContainerComponent, ContatoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Orcamentor';
}
