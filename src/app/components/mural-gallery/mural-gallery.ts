import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mural-gallery',
  imports: [CommonModule],
  templateUrl: './mural-gallery.html',
  styleUrl: './mural-gallery.css',
})
export class MuralGallery {
  @Input() murales: any[] = [];
  @Input() idMuralSeleccionado?: number | string = '';

  @Output() seleccionar = new EventEmitter<any>();
    //Función al hacer clic
    _seleccionarMural(mural:any){
      this.seleccionar.emit(mural);
    }
}
