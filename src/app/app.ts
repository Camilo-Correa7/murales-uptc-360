import { Component, signal, OnInit, inject } from '@angular/core';
import { Nav } from './components/nav/nav';
import { MuralInfo } from './components/mural-info/mural-info';
import { MuralViewer } from './components/mural-viewer/mural-viewer';
import { MuralGallery } from './components/mural-gallery/mural-gallery';
import { Mural } from './components/services/mural';
import { MuralModels } from './components/models/mural.models';
import { Evaluacion } from './components/evaluacion/evaluacion';



@Component({
  selector: 'app-root',
  imports: [Nav, MuralInfo, MuralViewer, MuralGallery, Evaluacion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('murales-360');

  private muralService = inject(Mural);

  mostrarLanding: boolean = true;
  iniciarRecorrido() {
    this.mostrarLanding = false;
    this.mostrarGaleria = true;
  }
  ///////////////////////////////////////////////////
  mostrarInterfazInfo: boolean = true;
  toggleInterfaz() {
    this.mostrarInterfazInfo = !this.mostrarInterfazInfo;
  }
  /////////////////////////////////////////
  irLanding() {
    this.mostrarLanding = true;
  }
  /////////////////////////////////////////
  murales: MuralModels[] = [];
  muralActual?: MuralModels;

  ngOnInit(): void {
    this.murales = this.muralService.obtenerMurales();
    this.muralActual = this.murales[0]
  }

  cambiarMuralActual(mural: any) {
    this.muralActual = mural;
    this.mostrarGaleria = false;
    this.cargandoMural = true;
  }
  /////////////////////////////////////////////////////
  mostrarGaleria: boolean = false;

  toogleGaleria() {
    this.mostrarGaleria = !this.mostrarGaleria;
  }
  ///////////////////////////////////////////////////////
  mostrarCreditos: boolean = false;
  //////////////////////////////////////////////////////
  cargandoMural: boolean = false;

  /////////////////////////////////////////////////////////
  ventanaEvaluacion: boolean = false;
  abrirEvaluacion() {
    this.ventanaEvaluacion = true;
    this.mostrarCreditos = false;

    if (this.mostrarLanding === true) {
      this.mostrarLanding = false;
      this.mostrarGaleria = true;
    }
  }
  cerrarEvaluacion() {
    this.ventanaEvaluacion = false;
  }
  ///////////////////////////
  irGaleriaEvaluacion() {
    this.ventanaEvaluacion = false;
    this.mostrarGaleria = true;
  }
}


