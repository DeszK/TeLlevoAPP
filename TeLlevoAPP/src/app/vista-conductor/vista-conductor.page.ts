import { Component, OnInit } from '@angular/core';
import {Animation,AnimationController} from '@ionic/angular';

@Component({
  selector: 'app-vista-conductor',
  templateUrl: './vista-conductor.page.html',
  styleUrls: ['./vista-conductor.page.scss'],
})
export class VistaConductorPage implements OnInit {

  alertButtons = ['Aceptar'];
   private animation?:Animation;
   constructor(private animationController:AnimationController) {}
   ngOnInit(){}
   ngAfterViewInit() {
    this.animation = this.animationController.create()
      .addElement(document.querySelector('.autito-duoc') as HTMLElement)
      .duration(2000)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'translateX(-150%)' },
        { offset: 1, transform: 'translateX(150%)' }
      ]);

    if (this.animation) {
      this.animation.play();
    }
  }
}