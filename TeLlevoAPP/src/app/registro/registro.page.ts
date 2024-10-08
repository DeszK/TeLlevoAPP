import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  //ATRIBUTOS
  alertButtonss = ['Aceptar'];
  data = {
      user:"",
      pw: "",
    }
  constructor(private alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: `Bienvenido a TeLlevoApp ${this.data.user}`,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
  //CONSTRUCTOR
  ngOnInit() {
  }

}
