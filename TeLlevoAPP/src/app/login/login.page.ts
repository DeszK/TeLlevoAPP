import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;  // Variable de estado para el spinner
  keepLoggedIn: boolean = false;

  constructor(private router: Router) { }  

  ngOnInit() { }

  login() {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.username || !this.password) {
      this.errorMessage = 'Por favor, complete ambos campos.';
    } else {
      this.isLoading = true;  // Muestra el spinner

      setTimeout(() => {
        this.isLoading = false;  // Oculta el spinner
        this.router.navigate(['/vista-cliente']);
      }, 3000);  // Simula un tiempo de espera para la autenticación
    }
  }
}