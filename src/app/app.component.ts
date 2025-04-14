import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Route, Router, RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ContainerComponent } from "./components/container/container.component";
import { ContatoComponent } from "./components/contato/contato.component";
import { HttpClientModule } from '@angular/common/http';
import { ServicoComponent } from './page/servico/servico.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'orcamentor';

  showNavbar = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login' ||  event.url === '/') {
          this.showNavbar = false;
        } else {
          this.showNavbar = true;
        }
      }
    });  }

}
