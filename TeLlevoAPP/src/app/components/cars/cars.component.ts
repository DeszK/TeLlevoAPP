import { Component, OnInit } from '@angular/core';
import { CarsService,Car } from 'src/app/services/cars.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent  implements OnInit {
  car:Car = {patente:"",modelo:"",imageUrl:"",nombre:""}
  constructor(
    private carService:CarsService,
    private aService:AuthService,
    private router:Router
  
  ) { }

  ngOnInit() {}

  addCar(){
    this.carService.addCar(this.car).then(()=>{
      alert("vehiculo agregado exitosamente")
      this.car = {patente:"",modelo:"",imageUrl:"",nombre:""}
    }).catch(error=>{alert("error al agregar vehiculo "+error)})
  }

  logout(){
    this.aService.logout();
    alert("sesion cerrada")
    this.router.navigate(["/home"]);
  }

}
