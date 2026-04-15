import { Injectable } from '@angular/core';
import { MuralModels } from '../models/mural.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Mural {
  private murales: MuralModels[] = [
    {
      id: 1,
      titulo: 'Lo que habita en la mente',
      autor: 'Epuquichi',
      fecha: 'Fecha de la fotografía 360° - 23 de febrero de 2026',
      tecnica: 'Pintura acrílica sobre muro',
      ubicacion: 'Puerta fachada posterior del edificio central UPTC - Tunja',
      descripcion: 'El mural representa a una joven sentada, con vestimenta deportiva, en una posición quieta y reflexiva, rodeada de cajas o marcos superpuestos. El fondo está dominado por tonos fríos (azules y grises) que generan una atmósfera introspectiva y algo melancólica. En la parte inferior izquierda aparece una escena secundaria con dos figuras femeninas, envueltas en colores más intensos, acompañadas de humo o elementos simbólicos.',
      imagen360Url: 'https://res.cloudinary.com/dtluhequn/image/upload/q_auto/f_auto/v1775149918/1_khhkr2.jpg',
    },
    {
      id: 2,
      titulo: 'La carga del estudio',
      autor: 'Anonimo',
      fecha: 'Fecha de la fotografía 360° - 23 de febrero de 2026',
      tecnica: 'Pintura acrílica sobre muro',
      ubicacion: 'Fachada posterior del edificio central, muro exterior UPTC - Tunja',
      descripcion: 'El mural representa a un hombre sentado frente a una mesa de estudio, rodeado de libros abiertos y apilados, con una expresión de concentración y cansancio. La postura del personaje, con las manos sosteniendo el rostro, sugiere reflexión profunda y carga mental. Los libros, algunos identificables como textos académicos, simbolizan el conocimiento, la exigencia intelectual y la responsabilidad del estudio. La escena se desarrolla en un espacio que evoca una biblioteca o ambiente académico, reforzando la relación directa con la vida universitaria y los procesos de formación profesional en la UPTC.',
      imagen360Url: 'https://res.cloudinary.com/dtluhequn/image/upload/v1774220748/2_zedpzn.jpg',
    },
    {
      id: 3,
      titulo: 'Estados emocionales',
      autor: 'Absenta',
      fecha: 'Fecha de la fotografía 360° - 23 de febrero de 2026',
      tecnica: 'Pintura acrílica sobre muro',
      ubicacion: 'Fachada posterior del edificio central, muro exterior UPTC - Tunja',
      descripcion: 'El mural presenta la figura de un joven sentado, con el cuerpo recogido y los brazos rodeando las piernas, en una postura que transmite introspección y vulnerabilidad. El entorno aparece de manera difusa y fragmentada, con elementos que sugieren un espacio interior doméstico o simbólico. La paleta de colores terrosos y apagados refuerza una atmósfera de silencio y reflexión. La obra enfatiza la expresión facial del personaje, destacando una mirada pensativa que invita al espectador a reflexionar sobre los estados emocionales y los procesos internos de la juventud.',
      imagen360Url: 'https://res.cloudinary.com/dtluhequn/image/upload/q_auto/f_auto/v1775149905/3_gysfja.jpg',

    },
    {
      id: 4,
      titulo: 'La figura y la sombra',
      autor: 'Anonimo',
      fecha: 'Fecha de la fotografía 360° - 23 de febrero de 2026',
      tecnica: 'Pintura acrílica sobre muro',
      ubicacion: 'Fachada posterior del edificio central, muro exterior UPTC - Tunja',
      descripcion: 'El mural presenta una figura humana de apariencia infantil o juvenil, situada al lado de una figura animal de gran tamaño, similar a un lobo o criatura simbólica. El animal se representa en color negro, con ojos blancos vacíos y una boca abierta mostrando dientes exagerados. El fondo está compuesto por patrones orgánicos que recuerdan hojas o formas naturales, generando un contraste entre lo humano, lo animal y el entorno.',
      imagen360Url: 'https://res.cloudinary.com/dtluhequn/image/upload/q_auto/f_auto/v1775149905/4_y5hzos.jpg',
    },
    {
      id: 5,
      titulo: 'Cansancio cotidiano',
      autor: 'Isba',
      fecha: '2014',
      tecnica: 'Pintura acrílica sobre muro',
      ubicacion: 'Fachada posterior del edificio central, muro exterior UPTC - Tunja',
      descripcion: 'El mural representa a una persona joven durmiendo sobre una cama, envuelta en cobijas de colores. A su lado se observa un teléfono móvil que vibra, mostrando una alarma con el texto “CLASE 7:00 AM”. El dispositivo emite ondas visuales que indican sonido o vibración. La escena se desarrolla en un ambiente íntimo y cotidiano, con énfasis en el descanso interrumpido',
      imagen360Url: 'https://res.cloudinary.com/dtluhequn/image/upload/q_auto/f_auto/v1775149913/5_wxk6ba.jpg',
    },
    {
      id: 6,
      titulo: 'Tecnología y pensamiento',
      autor: 'Anonimo',
      fecha: 'Fecha de la fotografía 360° - 23 de febrero de 2026',
      tecnica: 'Pintura acrílica sobre muro, estilo abstracto-figurativo',
      ubicacion: 'Fachada posterior del edificio central, muro exterior UPTC - Tunja',
      descripcion: 'El mural presenta una composición abstracta con figuras humanoides de aspecto mecánico o robótico, conectadas entre sí mediante líneas, cables y formas geométricas. Se integran elementos como papeles, dispositivos, símbolos y estructuras que evocan sistemas, procesos y circulación de información. La obra utiliza colores planos y contrastantes, predominando tonos azules, verdes, rojos y blancos.',
      imagen360Url: 'https://res.cloudinary.com/dtluhequn/image/upload/q_auto/f_auto/v1775149906/6_r7hgno.jpg',
    },
    {
      id: 7,
      titulo: 'Conexión humana',
      autor: 'Absenta',
      fecha: 'Fecha de la fotografía 360° - 23 de febrero de 2026',
      tecnica: 'Pintura acrílica sobre muro',
      ubicacion: 'Lateral del edificio central, frente al edificio Administrativo UPTC - Tunja',
      descripcion: 'El mural representa dos rostros masculinos de perfil, enfrentados y en contacto directo a través de un beso. Ambos personajes llevan gafas oscuras que cubren sus ojos, lo que desplaza la atención del acto visual hacia el gesto íntimo y emocional. Las figuras están tratadas con pinceladas expresivas y colores cálidos, principalmente tonos rosados, beige y ocres, que contrastan con un fondo oscuro. La composición enfatiza la cercanía, la piel y el contacto, generando una sensación de intimidad y quietud',
      imagen360Url: 'https://res.cloudinary.com/dtluhequn/image/upload/q_auto/f_auto/v1775149906/12_viv6jb.jpg',
    },
    {
      id: 8,
      titulo: 'Biblioteca psicodelica',
      autor: 'Julián Infante',
      fecha: ' Fecha de la fotografía 360° - 23 de febrero de 2026',
      tecnica: 'Pintura acrílica sobre muro',
      ubicacion: 'Lateral del edificio central, frente al edificio Administrativo UPTC - Tunja',
      descripcion: 'Mural figurativo de estilo contemporáneo que representa un grupo de personajes sentados alrededor de una mesa circular. Las figuras, mayormente humanoides, presentan rasgos distorsionados, colores irreales y expresiones emocionales intensas. Predominan los tonos azules y verdes, con contrastes en rojo y naranja. El fondo sugiere un entorno urbano y una atmósfera onírica o psicológica. Algunas figuras parecen observar, otras reaccionar con angustia o desconexión.',
      imagen360Url: 'https://res.cloudinary.com/dtluhequn/image/upload/q_auto/f_auto/v1775149907/11_g5vjfs.jpg',
    },
    {
      id: 9,
      titulo: 'Anhelos silenciosos',
      autor: 'Jorge Guatibonza',
      fecha: 'Fecha de la fotografía 360° - 23 de febrero de 2026',
      tecnica: 'Muralismo, pintura acrílica sobre muro',
      ubicacion: 'Respaldo del edificio central UPTC - Tunja',
      descripcion: 'Representa una escena realista figurativa con tres jóvenes sentados uno al lado del otro sobre lo que parece ser un colchón o un sofá bajo sin respaldo. Personaje izquierdo: Un joven descalzo sostiene un ramo de girasoles marchitos o secos entre sus manos, con la mirada baja y contemplativa.Personaje central: Otro joven, también descalzo, sostiene con cuidado una pequeña maqueta de una casa de madera en su regazo. Su expresión es de protección. Personaje derecho: Un tercer joven (que lleva calcetines oscuros) está leyendo un libro o revista abierta. Un pequeño pájaro posa tranquilamente sobre su libro.',
      imagen360Url: 'https://res.cloudinary.com/dtluhequn/image/upload/q_auto/f_auto/v1775149905/7_fwnhzs.jpg',
    },
    {
      id: 10,
      titulo: 'Refugio Interior',
      autor: 'Anónimo',
      fecha: 'Fecha de la fotografía 360° - 23 de febrero de 2026',
      tecnica: 'Muralismo, pintura acrílica sobre muro',
      ubicacion: 'Respaldo del edificio central UPTC - Tunja',
      descripcion: 'La obra presenta una vista cenital (desde arriba) de una mujer joven recostada sobre una cama con sábanas rosadas. Ella abraza protectoramente una maceta con una planta, mientras un gato duerme a su lado y varios libros abiertos descansan desordenados sobre el colchón.',
      imagen360Url: 'https://res.cloudinary.com/dtluhequn/image/upload/q_auto/f_auto/v1775149905/8_oqwjwm.jpg',
    },
    {
      id: 11,
      titulo: 'La casa de los gritos',
      autor: 'Anónimo',
      fecha: 'Fecha de la fotografía 360° - 23 de febrero de 2026',
      tecnica: 'Muralismo, pintura acrílica sobre muro, Neo-expresionismo',
      ubicacion: 'Respaldo del edificio central UPTC - Tunja',
      descripcion: 'Una figura gigante (torso) con la boca muy abierta (en un grito o bostezo profundo) flota sobre una estructura blanca con forma de casa, de la cual salen manos rojas y rostros tristes. Otra estructura tipo casa de la que emerge una figura de cuello largo y rostros adicionales apilados en la parte inferior.',
      imagen360Url: 'https://res.cloudinary.com/dtluhequn/image/upload/q_auto/f_auto/v1775149908/9_lgzbg2.jpg',
    },
    {
      id: 12,
      titulo: 'El gran paso',
      autor: 'Anónimo',
      fecha: 'Fecha de la fotografía 360° - 23 de febrero de 2026',
      tecnica: 'Muralismo, pintura acrílica sobre muro, ilustración con perspectiva',
      ubicacion: 'Respaldo del edificio central UPTC - Tunja',
      descripcion: 'Joven con gorra y buso rojo en una pose dinamica. La suela de su zapato deportivo es enorme y colorida, dominando la imagen. Sostiene una bandeja con objetos (parece una taza y un frasco) mientras mantiene el equilibrio.',
      imagen360Url: 'https://res.cloudinary.com/dtluhequn/image/upload/q_auto/f_auto/v1775149913/10_s5jdsb.jpg',
    },
    {
      id: 13,
      titulo: 'La mirada del cosmos',
      autor: 'Cristian Rojas y Johan Dru',
      fecha: 'Fecha de la fotografía 360° - 23 de febrero de 2026',
      tecnica: 'Muralismo, aerosol graffiti',
      ubicacion: 'Respaldo de la iglesia UPTC -Tunja',
      descripcion: 'Es una composición surrealista y geometrica. Un cielo oscuro estrellado dominado por un ojo reptiliano gigante, En la parte inferior, emergen bloques rectangulares azules y morados que simulan una ciudad futurista o cristales. Sobre este paisaje levitan cubos transparentes; algunos contienen rosas rojas y otros encierran rostros azules con ojos brillantes.',
      imagen360Url: 'https://res.cloudinary.com/dtluhequn/image/upload/q_auto/f_auto/v1775149907/15_wmd61f.jpg',
    },
    {
      id: 14,
      titulo: 'Homenaje a Alfredo Molano',
      autor: 'Santiago Florez',
      fecha: 'Fecha de la fotografía 360° - 23 de febrero de 2026',
      tecnica: 'Muralismo mixto',
      ubicacion: 'Costado derecho de la Biblioteca UPTC - Tunja',
      descripcion: 'El mural es un tributo explícito al sociólogo y periodista colombiano Alfredo Molano (1944-2019), cuyo nombre aparece junto a su retrato central. Se observan herramientas de su oficio: una máquina de escribir antigua, una pluma, una mano sosteniendo un casete de audio y otra una cámara fotográfica. A la derecha, se ve a un líder social o indígena alzando un bastón/bandera y una multitud detrás, representando la lucha social.',
      imagen360Url: 'https://res.cloudinary.com/dtluhequn/image/upload/q_auto/f_auto/v1775149908/16_yzcrnv.jpg',
    },
    {
      id: 15,
      titulo: 'Inmersión en el caos',
      autor: 'Enigma',
      fecha: 'Fecha de la fotografía 360° - 23 de febrero de 2026',
      tecnica: 'Muralismo, ilustración gráfica',
      ubicacion: 'Parte izquierda del edificio central UPTC - Tunja',
      descripcion: 'La obra muestra a un personaje joven de cabello azul flotando boca arriba en el centro de una mancha oscura que parece agua o un vacío, con los ojos cerrados y escuchando música con audífonos. Alrededor de esta "piscina" oscura orbitan desordenadamente objetos de la vida cotidiana moderna: un portátil, el logo de Instagram, botellas de licor, cajetillas de cigarrillos, una paleta de pintura, libros, ropa, una bandera LGBTQ+ y hasta un gato.',
      imagen360Url: 'https://res.cloudinary.com/dtluhequn/image/upload/q_auto/f_auto/v1775149906/14_n6gwns.jpg',
    },
    {
      id: 16,
      titulo: 'Reflejo digital',
      autor: 'Epuquichi',
      fecha: 'Fecha de la fotografía 360° - 23 de febrero de 2026',
      tecnica: 'Muralismo, pintura acrílica sobre muro',
      ubicacion: 'Respaldo del edificio central UPTC - Tunja',
      descripcion: 'La escena parece transcurrir en un baño o espacio íntimo con paredes de azulejos. Una mujer joven de cabello oscuro mira atentamente su teléfono móvil. Lleva una camiseta roja con la palabra "FREEDOMS" escrita al revés (se lee como en un espejo: S M O D E E R F).',
      imagen360Url: 'https://res.cloudinary.com/dtluhequn/image/upload/q_auto/f_auto/v1775149908/13_mp2hxb.jpg',
    },
    {
      id: 17,
      titulo: 'Tomas Herrera Cantillo',
      autor: 'Anónimo',
      fecha: 'Fecha de la fotografía 360° - 25 de marzo de 2026',
      tecnica: 'Fotografía 360° de monumento en concreto con intervención urbana (grafiti en aerosol)',
      ubicacion: 'Entrada principal cerca al puenta UPTC - Tunja',
      descripcion: 'La imagen muestra un monumento de base piramidal truncada pintado de rojo, situado sobre un camino de ladrillo y rodeado de amplias zonas verdes. La estructura principal ha sido fuertemente intervenida con aerosol negro, destacando símbolos de anarquía y la consigna "ACAB", reflejando una expresión de protesta o descontento social.',
      imagen360Url: 'https://res.cloudinary.com/dtluhequn/image/upload/q_auto/f_auto/v1776257305/17_yfufqa.jpg',
    },
    {
      id: 18,
      titulo: 'Goranchacha',
      autor: 'Anónimo',
      fecha: 'Fecha de la fotografía 360° - 25 de marzo de 2026',
      tecnica: 'Fotografía 360° de escultura',
      ubicacion: 'Muro parte central de la UPTC - Tunja',
      descripcion: 'La obra presenta una figura masculina, desnuda y de complexión musculosa, en una postura dinámica: el personaje avanza mientras señala decididamente hacia el frente y arriba con su brazo izquierdo. El rasgo más distintivo de la escultura es su cabeza, moldeada con formas puntiagudas que asemejan los rayos de un sol.',
      imagen360Url: 'https://res.cloudinary.com/dtluhequn/image/upload/q_auto/f_auto/v1776257305/18_czkzyu.jpg',
    },
   
  ];

  constructor() { }
  //Función para obtener todos los murales 
  obtenerMurales(): MuralModels[] {
    return this.murales;
  }

  //Función para obtener murales por el ID
  ObtenerMuralID(id: number): MuralModels | undefined {
    return this.murales.find(mural => mural.id === id);
  }

  ///////////////////////////////////////////////////////
  private muralesVistos = new Set<number>();
  progreso$ = new BehaviorSubject<number>(0);

  totalMurales = 18;


  marcarMuralComoVisto(idMural: number) {
    if (idMural && idMural > 0 && idMural <= this.totalMurales) {
      this.muralesVistos.add(idMural);
      this.progreso$.next(this.muralesVistos.size);
    }
  }
  
  evaluacionDesbloqueada(): boolean {
    return this.muralesVistos.size >= this.totalMurales;
  }
}
