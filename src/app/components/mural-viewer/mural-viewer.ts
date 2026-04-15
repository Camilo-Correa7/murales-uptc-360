import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Input, OnChanges, SimpleChanges, ChangeDetectorRef, OnInit, EventEmitter, Output } from '@angular/core';
import { Viewer } from '@photo-sphere-viewer/core';
import { Mural } from '../services/mural';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

@Component({
  selector: 'app-mural-viewer',
  imports: [],
  templateUrl: './mural-viewer.html',
  styleUrl: './mural-viewer.css',
})
export class MuralViewer implements AfterViewInit, OnDestroy, OnChanges, OnInit {

  precargarTodas() {
    this.murales.forEach(m => {
      const img = new Image();
      img.src = m.imagen360Url;
    });
  }
  @Input() idMural: number = 1;
  @ViewChild('viewerContainer', { static: true }) viewerContainer!: ElementRef;

  @Output() muralCambiado = new EventEmitter<any>();

  private viewer!: Viewer;
  private markersPlugin: any;

  muralActual: any;


  cargandoMural: boolean = true;

  modalVisible: boolean = false;
  hotspotActual: any = null;

  constructor(private mural: Mural,
    private cdr: ChangeDetectorRef
  ) { }
  //////////////////////////////////////////7777
  murales: any[] = [];

  ordenAleatorio: number[] = [];
  indiceActualOrden = 0;

  ngOnInit(): void {
    this.murales = this.mural.obtenerMurales();

    if (this.murales && this.murales.length > 0) {
      this.generarOrdenAleatorio();

      this.indiceActualOrden = this.ordenAleatorio.findIndex(i => this.murales[i].id === this.idMural);
      if (this.indiceActualOrden === -1) this.indiceActualOrden = 0;

      this.precargarTodas();
    }
  }
  ngAfterViewInit(): void {
    const muralInicial = this.mural.ObtenerMuralID(this.idMural);

    this.viewer = new Viewer({
      container: this.viewerContainer.nativeElement,
      panorama: muralInicial?.imagen360Url || '/Murales/1.jpg',
      navbar: ['zoom', 'move', 'caption', 'fullscreen'],
      loadingImg: '',
      loadingTxt: '',
      mousewheel: true,
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
      this.mural.marcarMuralComoVisto(this.idMural);
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
      this.indiceActualOrden = this.ordenAleatorio.findIndex(i => this.murales[i].id === this.idMural);
      if (this.indiceActualOrden === -1) this.indiceActualOrden = 0;

      this.cargarMuralInterno(this.idMural);
    }
  }

  generarOrdenAleatorio() {
    let indices = this.murales.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    this.ordenAleatorio = indices;
  }


  irASiguiente() {
    this.indiceActualOrden++;
    if (this.indiceActualOrden >= this.ordenAleatorio.length) {
      this.indiceActualOrden = 0;
    }
    const indiceReal = this.ordenAleatorio[this.indiceActualOrden];
    const siguienteMural = this.murales[indiceReal];

    this.muralCambiado.emit(siguienteMural);
  }

  irAAnterior() {
    this.indiceActualOrden--;
    if (this.indiceActualOrden < 0) {
      this.indiceActualOrden = this.ordenAleatorio.length - 1;
    }
    const indiceReal = this.ordenAleatorio[this.indiceActualOrden];
    const muralAnterior = this.murales[indiceReal];

    this.muralCambiado.emit(muralAnterior);
  }

  cargarMuralInterno(id: number) {
    const nuevoMural = this.mural.ObtenerMuralID(id);

    if (nuevoMural && this.viewer) {
      // 1. Mostramos tu animación de carga
      this.cargandoMural = true;
      this.cdr.detectChanges();

      // 2. Cargamos la imagen 360
      setTimeout(() => {
        this.viewer.setPanorama(nuevoMural.imagen360Url, { showLoader: false })
          .then(() => {
            this.cargandoMural = false;
            this.actualizarMarcadores(id);
            this.mural.marcarMuralComoVisto(id);
            this.cdr.detectChanges();
          })
          .catch(err => {
            console.error("Error al cargar panorama:", err);
            this.cargandoMural = false;
            this.cdr.detectChanges();
          });
      }, 50);
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
          titulo: 'La expresión del estudiante',
          descripcion: 'Este detalle muestra la profunda concentración y el desgaste mental del estudiante El artista utilizó trazos fuertes para resaltar el peso de la responsabilidad académica en la universidad.'
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