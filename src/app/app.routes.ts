import { Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contatos', component: ContainerComponent },
    { path: 'home/:id', component: HomeComponent },
];
