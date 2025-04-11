import { Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HomeComponent } from './page/home/home.component';
import { ServicoComponent } from './page/servico/servico.component';
import { LoginComponent } from './page/login/login.component';


// CRIA O ROUTER OUTLET E DETERMINA OS CAMINHOS
export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },
    { path: 'contatos', component: ContainerComponent },
    { path: 'home/:id', component: HomeComponent },
    {
        path: 'servicos', component: ContainerComponent, data: { tipoConteudo: 'servicos' }
    },
];
