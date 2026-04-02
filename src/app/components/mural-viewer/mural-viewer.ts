import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Viewer } from '@photo-sphere-viewer/core';
import { Mural } from '../services/mural';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

@Component({
  selector: 'app-mural-viewer',
  imports: [],
  templateUrl: './mural-viewer.html',
  styleUrl: './mural-viewer.css',
})
export class MuralViewer implements AfterViewInit, OnDestroy, OnChanges {
  @Input() idMural: number = 1;
  @ViewChild('viewerContainer', {static : true}) viewerContainer!: ElementRef;
  
  private viewer!: Viewer;
  private markersPlugin: any;
  
 
  cargandoMural: boolean = true; 

  modalVisible: boolean = false;
  hotspotActual: any = null;
  
  constructor(private mural: Mural,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    const muralInicial = this.mural.ObtenerMuralID(this.idMural);

    this.viewer = new Viewer({
      container: this.viewerContainer.nativeElement,
      panorama: muralInicial?.imagen360Url || '/Murales/1.jpg',
      navbar: ['zoom', 'move', 'caption', 'fullscreen'],
      loadingImg: '', 

      plugins: [
        [MarkersPlugin, {
          markers: [] 
        }]
      ]
    });

    this.markersPlugin = this.viewer.getPlugin(MarkersPlugin);

   
    this.viewer.addEventListener('ready', () => {
      this.cargandoMural = false;
      this.actualizarMarcadores(this.idMural); 

      this.cdr.detectChanges();
    }, { once: true });

    
    this.viewer.addEventListener('click', ({ data }: any) => {
      // Convierte los radianes a grados para que sea más fácil de leer
      const yawDeg = (data.yaw * 180 / Math.PI).toFixed(2);
      const pitchDeg = (data.pitch * 180 / Math.PI).toFixed(2);
      console.log(`📍 Coordenadas para nuevo Hotspot -> yaw: '${yawDeg}deg', pitch: '${pitchDeg}deg'`);
    });

    this.markersPlugin.addEventListener('select-marker', ({ marker }: any) => {
    if (marker.config.data) {
      this.hotspotActual = marker.config.data; 
      this.modalVisible = true;
      this.cdr.detectChanges(); 
    }
  });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['idMural'] && !changes['idMural'].isFirstChange() && this.viewer) {
      console.log('Visor actualizado a mural:', this.idMural);
      const nuevoMural = this.mural.ObtenerMuralID(this.idMural);

      if (nuevoMural) {
        this.cargandoMural = true;

        this.viewer.setPanorama(nuevoMural.imagen360Url)
          .then(() => { 
            console.log('Panorama cambiando con éxito');
            this.cargandoMural = false; 
            this.actualizarMarcadores(this.idMural);

            this.cdr.detectChanges();
          })
          .catch(e => {
            console.error('Error cambiando panorama', e);
            this.cargandoMural = false; 
            this.cdr.detectChanges();
          });
      } 
    }   
  }

  actualizarMarcadores(idMuralSeleccionado: number) {
    this.markersPlugin.clearMarkers();

    if (idMuralSeleccionado === 1) {
      this.markersPlugin.addMarker({
        id: 'm1-detalle1',
        position: { yaw: '30deg', pitch: '15deg' }, 
        html: '<div class="w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg cursor-pointer animate-pulse"></div>',
        tooltip: 'Rostro del estudiante',
        data: {
          titulo:'La expresión del estudiante',
          descripcion:'Este detalle muestra la profunda concentración y el desgaste mental del estudiante El artista utilizó trazos fuertes para resaltar el peso de la responsabilidad académica en la universidad.'
        }
      });
    } else if (idMuralSeleccionado === 2) {
      this.markersPlugin.addMarker({
        id: 'm2-detalle1',
        position: { yaw: '-45deg', pitch: '-10deg' }, 
        html: '<div class="w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg cursor-pointer animate-pulse"></div>',
        tooltip: 'Firma del autor',
        data: {
        titulo: 'La Firma Oculta',
        descripcion: 'El autor decidió esconder su firma en esta esquina inferior, integrándola con la textura de la pared para no interrumpir la composición principal de la obra.'
      }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.viewer) {
      this.viewer.destroy();
    }
  }

  cerrarModal() {
  this.modalVisible = false;
  this.hotspotActual = null;
  this.cdr.detectChanges();
}
}