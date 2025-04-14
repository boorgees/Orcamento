import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private http: HttpClient, private router: Router) { }



  login(form: any) {
    if (form.invalid) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    if (this.email === 'christian' && this.senha === '1234') {
      this.router.navigate(['/home']);

    }
    else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  }
}
