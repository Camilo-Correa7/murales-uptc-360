import { Injectable } from '@angular/core';
import { MuralModels } from '../models/mural.models';

@Injectable({
  providedIn: 'root',
})
export class Mural {
  private murales: MuralModels[] = [
    {
      id: 1,
      titulo: 'Lo que habita en la mente',
      autor: 'Epuquichi',
      fecha: 'No aplica',
      tecnica: 'Pintura acrílica sobre muro',
      ubicacion: 'Puerta fachada posterior del edificio central UPTC - Tunja',
      descripcion: 'El mural representa a una joven sentada, con vestimenta deportiva, en una posición quieta y reflexiva, rodeada de cajas o marcos superpuestos. El fondo está dominado por tonos fríos (azules y grises) que generan una atmósfera introspectiva y algo melancólica. En la parte inferior izquierda aparece una escena secundaria con dos figuras femeninas, envueltas en colores más intensos, acompañadas de humo o elementos simbólicos.',
      imagen360Url: 'Murales/1.jpg',
    },
    {
      id: 2,
      titulo: 'La carga del estudio',
      autor: 'Anonimo',
      fecha: 'No aplica',
      tecnica: 'Pintura acrílica sobre muro',
      ubicacion: 'Fachada posterior del edificio central, muro exterior UPTC - Tunja',
      descripcion: 'El mural representa a un hombre sentado frente a una mesa de estudio, rodeado de libros abiertos y apilados, con una expresión de concentración y cansancio. La postura del personaje, con las manos sosteniendo el rostro, sugiere reflexión profunda y carga mental. Los libros, algunos identificables como textos académicos, simbolizan el conocimiento, la exigencia intelectual y la responsabilidad del estudio. La escena se desarrolla en un espacio que evoca una biblioteca o ambiente académico, reforzando la relación directa con la vida universitaria y los procesos de formación profesional en la UPTC.',
      imagen360Url: 'https://res.cloudinary.com/dtluhequn/image/upload/v1774220748/2_zedpzn.jpg',
    },
    {
      id: 3,
      titulo: 'Estados emocionales',
      autor: 'Absenta',
      fecha:'No aplica',
      tecnica:'Pintura acrílica sobre muro',
      ubicacion:'Fachada posterior del edificio central, muro exterior UPTC - Tunja',
      descripcion:'El mural presenta la figura de un joven sentado, con el cuerpo recogido y los brazos rodeando las piernas, en una postura que transmite introspección y vulnerabilidad. El entorno aparece de manera difusa y fragmentada, con elementos que sugieren un espacio interior doméstico o simbólico. La paleta de colores terrosos y apagados refuerza una atmósfera de silencio y reflexión. La obra enfatiza la expresión facial del personaje, destacando una mirada pensativa que invita al espectador a reflexionar sobre los estados emocionales y los procesos internos de la juventud.',
      imagen360Url:'Murales/3.jpg',
      
    },
     {
      id: 4,
      titulo: 'La figura y la sombra',
      autor: 'Anonimo',
      fecha:'No aplica',
      tecnica:'Pintura acrílica sobre muro',
      ubicacion:'Fachada posterior del edificio central, muro exterior UPTC - Tunja',
      descripcion:'El mural presenta una figura humana de apariencia infantil o juvenil, situada al lado de una figura animal de gran tamaño, similar a un lobo o criatura simbólica. El animal se representa en color negro, con ojos blancos vacíos y una boca abierta mostrando dientes exagerados. El fondo está compuesto por patrones orgánicos que recuerdan hojas o formas naturales, generando un contraste entre lo humano, lo animal y el entorno.',
      imagen360Url:'Murales/4.jpg',
    },
     {
      id: 5,
      titulo: 'Cansancio cotidiano',
      autor: 'Isba',
      fecha:'2014',
      tecnica:'Pintura acrílica sobre muro',
      ubicacion:'Fachada posterior del edificio central, muro exterior UPTC - Tunja',
      descripcion:'El mural representa a una persona joven durmiendo sobre una cama, envuelta en cobijas de colores. A su lado se observa un teléfono móvil que vibra, mostrando una alarma con el texto “CLASE 7:00 AM”. El dispositivo emite ondas visuales que indican sonido o vibración. La escena se desarrolla en un ambiente íntimo y cotidiano, con énfasis en el descanso interrumpido',
      imagen360Url:'Murales/5.jpg',
    },
     {
      id: 6,
      titulo: 'Tecnología y pensamiento',
      autor: 'Anonimo',
      fecha:'No aplica',
      tecnica:'Pintura acrílica sobre muro, estilo abstracto-figurativo',
      ubicacion:'Fachada posterior del edificio central, muro exterior UPTC - Tunja',
      descripcion:'El mural presenta una composición abstracta con figuras humanoides de aspecto mecánico o robótico, conectadas entre sí mediante líneas, cables y formas geométricas. Se integran elementos como papeles, dispositivos, símbolos y estructuras que evocan sistemas, procesos y circulación de información. La obra utiliza colores planos y contrastantes, predominando tonos azules, verdes, rojos y blancos.',
      imagen360Url:'Murales/6.jpg',
    },
     {
      id: 7,
      titulo: 'Conexión humana',
      autor: 'Absenta',
      fecha:'No aplica',
      tecnica:'Pintura acrílica sobre muro',
      ubicacion:'Lateral del edificio central, frente al edificio Administrativo',
      descripcion:'El mural representa dos rostros masculinos de perfil, enfrentados y en contacto directo a través de un beso. Ambos personajes llevan gafas oscuras que cubren sus ojos, lo que desplaza la atención del acto visual hacia el gesto íntimo y emocional. Las figuras están tratadas con pinceladas expresivas y colores cálidos, principalmente tonos rosados, beige y ocres, que contrastan con un fondo oscuro. La composición enfatiza la cercanía, la piel y el contacto, generando una sensación de intimidad y quietud',
      imagen360Url:'',
    },
     {
      id: 8,
      titulo: '',
      autor: '',
      fecha:'',
      tecnica:'',
      ubicacion:'',
      descripcion:'',
      imagen360Url:'',
    },
     {
      id: 9,
      titulo: '',
      autor: '',
      fecha:'',
      tecnica:'',
      ubicacion:'',
      descripcion:'',
      imagen360Url:'',
    },
    {
      id: 10,
      titulo: '',
      autor: '',
      fecha:'',
      tecnica:'',
      ubicacion:'',
      descripcion:'',
      imagen360Url:'',
    },
    {
      id: 11,
      titulo: '',
      autor: '',
      fecha:'',
      tecnica:'',
      ubicacion:'',
      descripcion:'',
      imagen360Url:'',
    },
    {
      id: 12,
      titulo: '',
      autor: '',
      fecha:'',
      tecnica:'',
      ubicacion:'',
      descripcion:'',
      imagen360Url:'',
    },
    {
      id: 13,
      titulo: '',
      autor: '',
      fecha:'',
      tecnica:'',
      ubicacion:'',
      descripcion:'',
      imagen360Url:'',
    },
    {
      id: 14,
      titulo: '',
      autor: '',
      fecha:'',
      tecnica:'',
      ubicacion:'',
      descripcion:'',
      imagen360Url:'',
    },
    {
      id: 15,
      titulo: '',
      autor: '',
      fecha:'',
      tecnica:'',
      ubicacion:'',
      descripcion:'',
      imagen360Url:'',
    },
    {
      id: 16,
      titulo: '',
      autor: '',
      fecha:'',
      tecnica:'',
      ubicacion:'',
      descripcion:'',
      imagen360Url:'',
    },
  ];

  constructor() {}
    //Función para obtener todos los murales 
    obtenerMurales(): MuralModels[]{
      return this.murales;
    }

    //Función para obtener murales por el ID
    ObtenerMuralID(id: number):MuralModels | undefined{
      return this.murales.find(mural => mural.id === id);
    }
}
