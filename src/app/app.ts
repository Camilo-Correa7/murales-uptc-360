import { Component, signal, OnInit, inject } from '@angular/core';
import { Nav } from './components/nav/nav';
import { MuralInfo } from './components/mural-info/mural-info';
import { MuralViewer } from './components/mural-viewer/mural-viewer';
import { MuralGallery } from './components/mural-gallery/mural-gallery';
import { Mural } from './components/services/mural';
import { MuralModels } from './components/models/mural.models';
import { Footer } from './components/footer/footer';


@Component({
  selector: 'app-root',
  imports: [ Nav, MuralInfo, MuralViewer,MuralGallery, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('murales-360');

  private muralService = inject(Mural);

  mostrarLanding: boolean = true; 
  iniciarRecorrido(){
    this.mostrarLanding = false;
  }
///////////////////////////////////////////////////
  mostrarInterfazInfo: boolean = true;
  toggleInterfaz(){
    this.mostrarInterfazInfo = !this.mostrarInterfazInfo; 
  }
/////////////////////////////////////////
irLanding(){
  this.mostrarLanding = true;
}
/////////////////////////////////////////
  murales: MuralModels[] = [];
  muralActual?: MuralModels;

  ngOnInit(): void {
    this.murales = this.muralService.obtenerMurales();
    this.muralActual = this.murales[0]
  }

  cambiarMuralActual (mural: any){
    this.muralActual = mural;
    this.mostrarGaleria = false;
    this.cargandoMural = true;
  }
  /////////////////////////////////////////////////////
  mostrarGaleria:boolean = false;

  toogleGaleria(){
    this.mostrarGaleria =!this.mostrarGaleria;
  }
  ///////////////////////////////////////////////////////
  mostrarCreditos: boolean = false;
  //////////////////////////////////////////////////////
  cargandoMural: boolean = false;
}
