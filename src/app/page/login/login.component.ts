import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService, LoginRequest } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  loginRequest: LoginRequest = {
    email: '',
    senha: ''
  };

  constructor(private http: HttpClient, private router: Router, private AuthService: AuthService) { }

  login(form: any) {
    if (form.invalid) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    this.AuthService.login(this.loginRequest).subscribe({
      next: (response) => {
        this.router.navigate(['/home']);
      },
      error: (error: Error) => {
        console.error('Erro no login:', error)
      }
    });
  }
}