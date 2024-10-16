import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaClientePageRoutingModule } from './vista-cliente-routing.module';

import { VistaClientePage } from './vista-cliente.page';
import { ListaCarsComponent } from '../components/lista-cars/lista-cars.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaClientePageRoutingModule
  ],
  declarations: [VistaClientePage,ListaCarsComponent]
})
export class VistaClientePageModule {}
