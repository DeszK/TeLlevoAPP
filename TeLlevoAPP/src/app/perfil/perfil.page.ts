import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit, AfterViewInit {

  alertButtonss = ['Aceptar'];

  private animation?: Animation;
  private colorAnimation?: Animation;

  constructor(private animationController: AnimationController) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.colorAnimation = this.animationController.create()
      .addElement(document.querySelector('.amogus') as HTMLElement)
      .addElement(document.querySelector('.mochila') as HTMLElement)
      .addElement(document.querySelector('.pierna.izquierda') as HTMLElement)
      .addElement(document.querySelector('.pierna.derecha') as HTMLElement)
      .duration(2000)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, backgroundColor: '#FF0000' },  
        { offset: 0.15, backgroundColor: '#FF7F00' }, 
        { offset: 0.30, backgroundColor: '#FFFF00' }, 
        { offset: 0.45, backgroundColor: '#00FF00' }, 
        { offset: 0.60, backgroundColor: '#0000FF' }, 
        { offset: 0.75, backgroundColor: '#4B0082' }, 
        { offset: 0.90, backgroundColor: '#9400D3' }, 
        { offset: 1, backgroundColor: '#FF0000' },    
      ]);

    this.animation = this.animationController.create()
      .addElement(document.querySelector('.amogus') as HTMLElement)
      .duration(5000) 
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'translateX(100vw) translateY(0)' },   
        { offset: 0.15, transform: 'translateX(75vw) translateY(-40px)' }, 
        { offset: 0.30, transform: 'translateX(50vw) translateY(0)' },  
        { offset: 0.45, transform: 'translateX(25vw) translateY(-40px)' },
        { offset: 0.60, transform: 'translateX(0) translateY(0)' },      
        { offset: 0.75, transform: 'translateX(-25vw) translateY(-40px)' },
        { offset: 0.90, transform: 'translateX(-50vw) translateY(0)' },   
        { offset: 1, transform: 'translateX(-100vw) translateY(0)' },     
      ]);

    if (this.animation && this.colorAnimation) {
      this.animation.play();
      this.colorAnimation.play();
    }
  }

}
