import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email?: string;
  password?: string;

  constructor() { }
  
  onSubmit() {
    // Lógica para manejar el inicio de sesión
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

  ngOnInit() {
  }
}
