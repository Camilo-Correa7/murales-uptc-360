import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evaluacion',
  imports: [CommonModule],
  templateUrl: './evaluacion.html',
  styleUrl: './evaluacion.css',
})
export class Evaluacion {
  
  @Output() cerrar = new EventEmitter<void>();

  preguntas = [
    //--- Mural 1: Lo que habita en la mente ---
    {
      idMural: 1,
      pregunta: "En el mural, la joven está rodeada de tonos fríos (azules y grises). Según la interpretación de la obra, ¿qué busca generar esta atmósfera?",
      opciones: [
        "Alegría y celebración por la vida universitaria.",
        "Una atmósfera introspectiva y algo melancólica, reflejando la carga emocional del estudiante.",
        "Representar el clima característico de la ciudad.",
        "Un homenaje estético a los colores institucionales de la UPTC."
      ],
      respuestaCorrecta: 1
    },
    {
      idMural: 1,
      pregunta: "La figura principal de la obra 'no actúa: piensa'. ¿Qué idea refuerza esta posición quieta y reflexiva en el contexto de la universidad?",
      opciones: [
        "El cansancio físico extremo después de realizar actividades deportivas.",
        "La indiferencia generalizada ante los problemas sociales del entorno.",
        "El proceso de reflexión y cuestionamiento durante la formación personal y académica.",
        "La paciencia requerida para acceder a los servicios del edificio central."
      ],
      respuestaCorrecta: 2
    },
    {
      idMural: 1,
      pregunta: "¿En qué lugar exacto de la UPTC debes ubicarte para observar físicamente esta obra de Epuquichi?",
      opciones: [
        "En la entrada de la biblioteca central.",
        "En la puerta de la fachada posterior del edificio central.",
        "En los muros exteriores del coliseo deportivo.",
        "En la entrada principal de la universidad."
      ],
      respuestaCorrecta: 1
    },
    //--- Mural 2: La carga del estudio ---
    {
      idMural: 2,
      pregunta: "En la obra 'La carga del estudio', el personaje se encuentra con las manos sosteniendo su rostro frente a una mesa. ¿Qué estado emocional y mental busca transmitir esta postura?",
      opciones: [
        "Tranquilidad y descanso después de finalizar el semestre.",
        "Reflexión profunda, concentración y la inmensa carga mental que conlleva el estudio.", // Correcta
        "Aburrimiento por la falta de actividades culturales en el campus.",
        "Molestia por el ruido constante en los pasillos de la universidad."
      ],
      respuestaCorrecta: 1
    },
    {
      idMural: 2,
      pregunta: "El protagonista del mural está rodeado de libros abiertos y apilados. Dentro del contexto de esta obra universitaria, ¿qué simbolizan principalmente estos elementos?",
      opciones: [
        "El conocimiento, la alta exigencia intelectual y la responsabilidad del estudiante.", // Correcta
        "El desorden habitual en los espacios de estudio compartidos.",
        "La historia antigua de la universidad y sus primeros fundadores.",
        "El alto costo económico de los materiales académicos."
      ],
      respuestaCorrecta: 0
    },
    {
      idMural: 2,
      pregunta: "A diferencia del mural 'Lo que habita en la mente' (que es de Epuquichi), ¿a quién se le atribuye la autoría del mural 'La carga del estudio' ubicado en el muro exterior de la fachada posterior?",
      opciones: [
        "A un colectivo de estudiantes de la Licenciatura en Informática.",
        "A un artista internacional invitado.",
        "Es una obra de autor anónimo.", // Correcta
        "Al mismo autor, Epuquichi, bajo un seudónimo."
      ],
      respuestaCorrecta: 2
    },
    // --- MURAL 3: Estados emocionales ---
    {
      idMural: 3,
      pregunta: "En el mural 'Estados emocionales', el personaje se encuentra con los brazos rodeando sus piernas. ¿Qué sensación principal busca transmitir esta postura corporal?",
      opciones: [
        "Alegría y extroversión extrema.",
        "Introspección y vulnerabilidad frente a sus procesos internos.", // Correcta
        "Agresividad y rebeldía contra el sistema educativo.",
        "Relajación profunda tras una jornada de ejercicio físico."
      ],
      respuestaCorrecta: 1
    },
    {
      idMural: 3,
      pregunta: "¿De qué manera contribuye la paleta de colores terrosos y apagados al mensaje de la obra de la autora Absenta?",
      opciones: [
        "Refuerza una atmósfera de silencio y reflexión en un espacio difuso.", // Correcta
        "Representa la vitalidad, el ruido y la energía del campus universitario.",
        "Simboliza el inicio de la primavera y la naturaleza en la universidad.",
        "Busca resaltar únicamente la técnica mixta sobre el concreto."
      ],
      respuestaCorrecta: 0
    },

    // --- MURAL 4: La figura y la sombra ---
    {
      idMural: 4,
      pregunta: "En la obra 'La figura y la sombra', se presenta a un joven junto a un gran animal oscuro similar a un lobo. ¿Qué contraste principal se genera en la composición del mural?",
      opciones: [
        "Entre la tecnología moderna y la vida en la naturaleza.",
        "Entre lo humano, la figura animal simbólica y el entorno orgánico de hojas.", // Correcta
        "Entre el día y la noche en las instalaciones del campus.",
        "Entre la vida académica en las aulas y las actividades deportivas."
      ],
      respuestaCorrecta: 1
    },
    {
      idMural: 4,
      pregunta: "El imponente animal negro de este mural de autor anónimo se caracteriza por tener ojos blancos vacíos y boca abierta. En el ámbito psicológico o literario, ¿qué suele representar esta 'sombra' que acompaña a la figura juvenil?",
      opciones: [
        "La mascota oficial que cuida las instalaciones de la universidad.",
        "Los miedos, ansiedades o la parte instintiva que habita en nuestro interior.", // Correcta
        "Un animal callejero buscando refugio en la academia.",
        "La estricta disciplina impuesta por la institución."
      ],
      respuestaCorrecta: 1
    },

    // --- MURAL 5: Cansancio cotidiano ---
    {
      idMural: 5,
      pregunta: "El mural 'Cansancio cotidiano' conecta inmediatamente con la rutina estudiantil al mostrar un teléfono vibrando que interrumpe el sueño. ¿Qué mensaje exacto muestra la alarma del dispositivo?",
      opciones: [
        "EXAMEN FINAL",
        "ENTREGA DE PROYECTO",
        "CLASE 7:00 AM", // Correcta
        "DESPERTAR"
      ],
      respuestaCorrecta: 2
    },
    {
      idMural: 5,
      pregunta: "¿Cuál es el énfasis o tema central que la artista Isba busca retratar con esta escena tan íntima del joven envuelto en cobijas de colores?",
      opciones: [
        "La adicción a las redes sociales y a las pantallas en la juventud.",
        "La comodidad de las residencias universitarias de la UPTC.",
        "El descanso interrumpido y el sacrificio personal en la exigencia de la rutina diaria.", // Correcta
        "La importancia de la tecnología en la educación a distancia."
      ],
      respuestaCorrecta: 2
    },
    {
      idMural: 5,
      pregunta: "A diferencia de los murales anteriores que no tienen una fecha exacta registrada, ¿en qué año se realizó esta obra de pintura acrílica titulada 'Cansancio cotidiano'?",
      opciones: [
        "2019",
        "2021",
        "2024", // Correcta
        "2020"
      ],
      respuestaCorrecta: 2
    },

    // --- MURAL 6: Tecnología y pensamiento ---
    {
      idMural: 6,
      pregunta: "El mural 'Tecnología y pensamiento' presenta figuras humanoides conectadas por líneas y cables. ¿Qué concepto principal evocan estos elementos integrados en la composición?",
      opciones: [
        "El desarrollo del tendido eléctrico en la infraestructura universitaria.",
        "Sistemas, procesos y la circulación de información.", // Correcta
        "El aislamiento de los estudiantes frente a las pantallas modernas.",
        "La historia de la radiodifusión en el departamento de Boyacá."
      ],
      respuestaCorrecta: 1
    },
    {
      idMural: 6,
      pregunta: "¿Qué estilo artístico define principalmente a esta colorida obra muralística de autor anónimo?",
      opciones: [
        "Realismo social y documental.",
        "Estilo abstracto-figurativo.", // Correcta
        "Impresionismo clásico.",
        "Arte pop con influencias publicitarias."
      ],
      respuestaCorrecta: 1
    },

    // --- MURAL 7: Conexión humana ---
    {
      idMural: 7,
      pregunta: "En la obra 'Conexión humana' de Absenta, los dos rostros masculinos que se besan llevan gafas oscuras que cubren sus ojos. Según el análisis de la obra, ¿qué efecto logra este detalle?",
      opciones: [
        "Ocultar la identidad de los personajes para proteger su anonimato.",
        "Representar la ceguera frente a las críticas de la sociedad.",
        "Desplazar la atención del acto visual hacia el gesto íntimo y emocional.", // Correcta
        "Darle un aspecto moderno y urbano a los protagonistas de la escena."
      ],
      respuestaCorrecta: 2
    },
    {
      idMural: 7,
      pregunta: "¿Cómo utiliza la artista la paleta de colores para resaltar la cercanía y el contacto entre las figuras?",
      opciones: [
        "Usa tonos fríos y metálicos sobre un fondo blanco y brillante.",
        "Usa colores cálidos (rosados, beige, ocres) que contrastan fuertemente con un fondo oscuro.", // Correcta
        "Utiliza exclusivamente blanco y negro para dar un tono melancólico al beso.",
        "Pinta los rostros con colores primarios muy saturados para generar tensión visual."
      ],
      respuestaCorrecta: 1
    },

    // --- MURAL 8: Biblioteca psicodélica ---
    {
      idMural: 8,
      pregunta: "Las figuras sentadas alrededor de la mesa en la 'Biblioteca psicodélica' de Julián Infante presentan rasgos distorsionados y colores irreales. ¿Qué emociones o reacciones expresan principalmente estos personajes?",
      opciones: [
        "Alegría desbordante y celebración por el fin del periodo académico.",
        "Angustia, desconexión o una observación atónita del entorno.", // Correcta
        "Concentración extrema y paz interior durante el estudio.",
        "Indiferencia total y relajación frente al espectador."
      ],
      respuestaCorrecta: 1
    },
    {
      idMural: 8,
      pregunta: "El fondo y los colores de este mural sugieren un entorno urbano, pero envuelto en una atmósfera muy particular. ¿Cómo se define esta atmósfera en la obra?",
      opciones: [
        "Onírica o psicológica.", // Correcta
        "Hiperrealista y documental.",
        "Costumbrista y tradicional.",
        "Estrictamente geométrica y minimalista."
      ],
      respuestaCorrecta: 0
    },

    // --- MURAL 9: Anhelos silenciosos ---
    {
      idMural: 9,
      pregunta: "En la obra realista 'Anhelos silenciosos' de Jorge Guatibonza, el joven ubicado en el centro sostiene algo en su regazo con una expresión de protección. ¿Qué objeto es?",
      opciones: [
        "Un libro abierto donde reposa un pequeño pájaro.",
        "Un ramo de girasoles marchitos y secos.",
        "Una pequeña maqueta de una casa de madera.", // Correcta
        "Un dispositivo móvil reproduciendo un video."
      ],
      respuestaCorrecta: 2
    },
    {
      idMural: 9,
      pregunta: "Al observar los detalles de los tres jóvenes sentados en el sofá sin respaldo, ¿qué elemento acompaña al personaje de la derecha?",
      opciones: [
        "Está totalmente descalzo mirando fijamente al suelo.",
        "Lee un libro o revista abierta sobre el cual posa tranquilamente un pequeño pájaro.", // Correcta
        "Sostiene unas flores marchitas entre sus manos.",
        "Duerme profundamente apoyado sobre el hombro de su compañero."
      ],
      respuestaCorrecta: 1
    },

    // --- MURAL 10: Refugio Interior ---
    {
      idMural: 10,
      pregunta: "El mural anónimo 'Refugio Interior' tiene una perspectiva que nos hace sentir como si observáramos la escena desde arriba. ¿Cómo se llama técnicamente este tipo de ángulo visual?",
      opciones: [
        "Vista panorámica.",
        "Vista en contrapicado.",
        "Vista cenital.", // Correcta
        "Vista isométrica."
      ],
      respuestaCorrecta: 2
    },
    {
      idMural: 10,
      pregunta: "En esta escena, la joven recostada sobre sábanas rosadas abraza protectoramente una maceta con una planta. ¿Qué otros elementos la acompañan en la cama, reforzando la idea de un 'refugio' personal?",
      opciones: [
        "Un perro guardián y un computador portátil encendido.",
        "Un gato que duerme a su lado y varios libros abiertos descansando desordenados.", // Correcta
        "Una pequeña maqueta de madera y girasoles marchitos.",
        "Un teléfono móvil vibrando incesantemente sobre la almohada."
      ],
      respuestaCorrecta: 1
    },

    // --- MURAL 11: Fragmentación del ser ---
    {
      idMural: 11,
      pregunta: "En el mural 'Fragmentación del ser', vemos partes del rostro del personaje flotando como si se estuvieran desprendiendo. ¿Qué proceso psicológico busca representar esta técnica visual?",
      opciones: [
        "El deseo de someterse a una cirugía estética.",
        "La sensación de perder la identidad o sentirse 'desarmado' ante las crisis personales.", // Correcta
        "La evolución de la tecnología en el reconocimiento facial.",
        "El rompecabezas como hobby principal del estudiante de artes."
      ],
      respuestaCorrecta: 1
    },
    {
      idMural: 11,
      pregunta: "¿Qué elemento cromático (de color) utiliza el autor anónimo para enfatizar el vacío entre las partes del rostro?",
      opciones: [
        "Sombras negras profundas que contrastan con los tonos de la piel.", // Correcta
        "Brillos dorados para dar un aspecto de joya rota.",
        "Flores de colores que llenan los espacios vacíos.",
        "Líneas blancas que conectan las piezas como un plano arquitectónico."
      ],
      respuestaCorrecta: 0
    },

    // --- MURAL 12: Mirada al futuro ---
    {
      idMural: 12,
      pregunta: "La obra 'Mirada al futuro' de Epuquichi muestra un perfil humano mirando fijamente hacia el horizonte. ¿Qué simboliza la dirección de esa mirada en el entorno universitario?",
      opciones: [
        "La búsqueda de la salida más cercana del edificio.",
        "La observación de las aves migratorias en el campus.",
        "La visión de metas, propósitos y las oportunidades que vendrán tras la formación.", // Correcta
        "La nostalgia por el pasado y los años de colegio."
      ],
      respuestaCorrecta: 2
    },

    // --- MURAL 13: El peso del saber ---
    {
      idMural: 13,
      pregunta: "En el mural 'El peso del saber', el personaje recuerda al mito de Atlas, pero en lugar del mundo, carga una enorme pila de libros. ¿Cuál es el mensaje central sobre la vida académica?",
      opciones: [
        "Que la biblioteca de la UPTC necesita mejores estantes.",
        "La gran responsabilidad y el esfuerzo físico/mental que implica la adquisición de conocimiento.", // Correcta
        "Que el estudiante prefiere los libros digitales a los físicos.",
        "La importancia de hacer ejercicio para cargar objetos pesados."
      ],
      respuestaCorrecta: 1
    },

    // --- MURAL 14: Dualidad académica ---
    {
      idMural: 14,
      pregunta: "La obra 'Dualidad académica' de Isba divide el rostro en dos partes: una integrada con engranajes y otra con elementos naturales. ¿Qué equilibrio intenta proponer la artista?",
      opciones: [
        "La competencia entre la facultad de ingeniería y la de ciencias agrarias.",
        "La armonía necesaria entre el avance tecnológico (maquinaria) y la esencia humana (naturaleza).", // Correcta
        "El uso de herramientas mecánicas para la jardinería.",
        "La diferencia entre estudiar de día y estudiar de noche."
      ],
      respuestaCorrecta: 1
    },

    // --- MURAL 15: Raíces de Boyacá ---
    {
      idMural: 15,
      pregunta: "En el mural 'Raíces de Boyacá', Jorge Guatibonza utiliza iconografía tradicional y figuras de campesinos. ¿Cuál es la intención de llevar estos motivos al muro de una universidad?",
      opciones: [
        "Decorar el muro con temas rurales por falta de presupuesto.",
        "Rendir homenaje al origen, la cultura regional y el sentido de pertenencia del estudiante boyacense.", // Correcta
        "Indicar que la universidad solo ofrece carreras relacionadas con el campo.",
        "Mostrar cómo se vestían las personas en el siglo pasado."
      ],
      respuestaCorrecta: 1
    },

    // --- MURAL 16: Simbiosis ---
    {
      idMural: 16,
      pregunta: "La obra final 'Simbiosis' de Julián Infante muestra raíces de árboles fundiéndose con el cuerpo humano. Según el título y la imagen, ¿qué significa esta unión?",
      opciones: [
        "Que el personaje se ha quedado dormido en el jardín tanto tiempo que le crecieron raíces.",
        "Una interdependencia total donde el ser humano y su entorno crecen y se nutren mutuamente.", // Correcta
        "El peligro de las plantas invasoras en las paredes de los edificios.",
        "Una representación de la anatomía humana vista desde la botánica."
      ],
      respuestaCorrecta: 1
    }
  ];

  preguntaActual = 0;
  puntuacion = 0;
  evaluacionTerminada = false;
  opcionSeleccionada: number | null = null;
  mostrarResultado = false;

  seleccionarOpcion(index: number) {
    if (this.mostrarResultado) return; 

    this.opcionSeleccionada = index;
    this.mostrarResultado = true;

    if (index === this.preguntas[this.preguntaActual].respuestaCorrecta) {
      this.puntuacion++;
    }
  }

  siguientePregunta() {
    if (this.preguntaActual < this.preguntas.length - 1) {
      this.preguntaActual++;
      this.opcionSeleccionada = null;
      this.mostrarResultado = false;
      this.hacerScrollArriba();
    } else {
      this.evaluacionTerminada = true;
    }
  }

  reiniciarEvaluacion() {
    this.preguntaActual = 0;
    this.puntuacion = 0;
    this.evaluacionTerminada = false;
    this.opcionSeleccionada = null;
    this.mostrarResultado = false;
  }
  hacerScrollArriba() {
    const contenedorScroll = document.getElementById('scroll-interno-eval');
    if (contenedorScroll) {
      // Usamos setTimeout para asegurar que Angular ya renderizó la nueva pregunta
      setTimeout(() => {
        contenedorScroll.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }
  }

  obtenerMensajeFinal(): string {
    const porcentaje = this.puntuacion / this.preguntas.length;
    
    if (porcentaje === 1) {
      return "¡Puntuación perfecta! Eres un verdadero experto en el patrimonio artístico de la UPTC.";
    } else if (porcentaje >= 0.7) {
      return "¡Excelente trabajo! Tienes una mirada muy atenta al arte y sus significados profundos.";
    } else if (porcentaje >= 0.4) {
      return "¡Buen intento! Has captado varios detalles interesantes, pero aún hay secretos por descubrir.";
    } else {
      return "¡Sigue explorando! Te invitamos a recorrer los murales nuevamente prestando atención a los detalles.";
    }
  }
}
