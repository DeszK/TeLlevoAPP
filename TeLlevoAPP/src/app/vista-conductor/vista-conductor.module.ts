import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaConductorPageRoutingModule } from './vista-conductor-routing.module';

import { VistaConductorPage } from './vista-conductor.page';
import { CarsComponent } from '../components/cars/cars.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaConductorPageRoutingModule
  ],
  declarations: [VistaConductorPage,CarsComponent]
})
export class VistaConductorPageModule {}
