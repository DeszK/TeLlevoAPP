import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importar el Router

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

  constructor(private router: Router) { }  // Inyectar el Router en el constructor

  ngOnInit() { }

  login() {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.username || !this.password) {
      this.errorMessage = 'Por favor, complete ambos campos.';
    } else {
      this.successMessage = 'Iniciando sesión...';

      // Simular un pequeño retraso para que se vea el mensaje "Iniciando sesión"
      setTimeout(() => {
        // Redirigir a /vista-cliente
        this.router.navigate(['/vista-cliente']);
      }, 1000);  // Retraso de 1 segundo para mostrar el mensaje
    }
  }
}
