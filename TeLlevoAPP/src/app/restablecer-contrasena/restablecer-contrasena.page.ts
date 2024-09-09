import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.page.html',
  styleUrls: ['./restablecer-contrasena.page.scss'],
})
export class RestablecerContrasenaPage implements OnInit {
  //ATRIBUTOS
  alertButtonss = ['Aceptar'];
  data = {
      user:"",
      pw: "",
    }
  constructor(private alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: `Bienvenido de vuelta a TeLlevoApp ${this.data.user}`,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
  //CONSTRUCTOR
  ngOnInit() {
  }

}
