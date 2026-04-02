import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  isMenuOpen: boolean = false;

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
  cerrarMenu(){
    this.isMenuOpen = false;
  }

  @Input()mostrarBotonGaleria: boolean = false;

  @Output()volverInicio = new EventEmitter<void>();

  @Output()abrirGaleria = new EventEmitter<void>(); 

  @Output()ventanaCreditos = new EventEmitter<void>();

  clicInicio(event: Event){
    event.preventDefault();
    this.volverInicio.emit();
  }

  clicVerGaleria(event: Event){
    event.preventDefault();
    this.abrirGaleria.emit();
  }

  clicVerCreditos(event: Event){
    event.preventDefault();
    this.ventanaCreditos.emit();
  }
}
