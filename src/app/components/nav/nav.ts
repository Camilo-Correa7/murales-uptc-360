import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Mural } from '../services/mural';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav implements OnInit {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  cerrarMenu() {
    this.isMenuOpen = false;
  }

  @Input() mostrarBotonGaleria: boolean = false;

  @Output() volverInicio = new EventEmitter<void>();

  @Output() abrirGaleria = new EventEmitter<void>();

  @Output() ventanaCreditos = new EventEmitter<void>();

  @Output() ventanaEvaluacion = new EventEmitter<void>();

  clicInicio(event: Event) {
    event.preventDefault();
    this.volverInicio.emit();
  }

  clicVerGaleria(event: Event) {
    event.preventDefault();
    this.abrirGaleria.emit();
  }

  clicVerCreditos(event: Event) {
    event.preventDefault();
    this.ventanaCreditos.emit();
  }

  clicVerEvaluacion(event: Event) {
    event.preventDefault();
    this.ventanaEvaluacion.emit();
  }


  muralesVistos: number = 0;
  totalMurales: number = 18;
  desbloqueado: boolean = false;

  constructor(private muralService: Mural) { }

  ngOnInit() {
    this.muralService.progreso$.subscribe(cantidad => {
      this.muralesVistos = cantidad;
      this.desbloqueado = cantidad >= this.totalMurales;

      if (cantidad >= 18) {
        setTimeout(() => {
          this.abrirEvaluacion();
        }, 1000);
      }
    });
  }
  abrirEvaluacion() {
    this.ventanaEvaluacion.emit();
  }
}
