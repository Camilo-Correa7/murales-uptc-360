import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-evaluacion',
  imports: [CommonModule],
  templateUrl: './evaluacion.html',
  styleUrl: './evaluacion.css',
})
export class Evaluacion {

  @Output() cerrar = new EventEmitter<void>();
  @Output() abrirGaleria = new EventEmitter<void>();

  //Control 
  faseActual: 'registro' | 'preguntas' | 'resultados' = 'registro';

  ///Variable para el mensaje de error
  messageError: string = '';

  //Variables para el registro del usuario
  nameUser: string = '';
  exploracion: boolean | null = null;
  score: number = 0;
  envioDatos: boolean = false; // Mostrar un Cargando... 
  ////////////////////////////////////////////////////////////////////
  preguntas = [
    //--- Mural 1: Lo que habita en la mente ---
    {
      idMural: 1,
      pregunta: "En el mural, la joven está pintada principalmente con colores azules y grises. Al observar esta escena, ¿qué sensación crees que busca transmitir la obra?",
      opciones: [
        "Una atmósfera introspectiva y algo melancólica, reflejando la carga emocional del estudiante.", // Correcta (0)
        "Alegría y celebración por el inicio de la vida universitaria.",
        "Representar el clima característico y frío de la ciudad.",
        "Un homenaje estético a los colores institucionales de la UPTC."
      ],
      respuestaCorrecta: 0
    },
    {
      idMural: 1,
      pregunta: "La figura principal de la obra 'no actúa: piensa'. ¿Qué idea refuerza esta posición quieta y reflexiva en el contexto de la universidad?",
      opciones: [
        "La indiferencia generalizada ante los problemas sociales del entorno.",
        "El cansancio físico extremo después de realizar actividades deportivas.",
        "La paciencia requerida para acceder a los servicios del edificio central.",
        "El proceso de reflexión y cuestionamiento durante la formación personal y académica." // Correcta (3)
      ],
      respuestaCorrecta: 3
    },
    {
      idMural: 1,
      pregunta: "¿En qué lugar exacto de la UPTC debes ubicarte para observar físicamente esta obra de Epuquichi?",
      opciones: [
        "En la puerta de la fachada posterior del edificio central.",
        "En la entrada de la biblioteca central.", // Correcta (1)
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
        "Molestia por el ruido constante en los pasillos de la universidad.",
        "Reflexión profunda, concentración y la inmensa carga mental que conlleva el estudio.", // Correcta (2)
        "Aburrimiento por la falta de actividades culturales en el campus."
      ],
      respuestaCorrecta: 2
    },
    {
      idMural: 2,
      pregunta: "El protagonista del mural está rodeado de libros abiertos y apilados. Dentro del contexto de esta obra universitaria, ¿qué simbolizan principalmente estos elementos?",
      opciones: [
        "El desorden habitual en los espacios de estudio compartidos.",
        "El conocimiento, la alta exigencia intelectual y la responsabilidad del estudiante.", // Correcta (1)
        "La historia antigua de la universidad y sus primeros fundadores.",
        "El alto costo económico de los materiales académicos."
      ],
      respuestaCorrecta: 1
    },
    {
      idMural: 2,
      pregunta: "A diferencia del mural 'Lo que habita en la mente' (que es de Epuquichi), ¿a quién se le atribuye la autoría del mural 'La carga del estudio' ubicado en el muro exterior de la fachada posterior?",
      opciones: [
        "Es una obra de autor anónimo.", // Correcta (0)
        "A un colectivo de estudiantes de la Licenciatura en Informática.",
        "A un artista internacional invitado.",
        "Al mismo autor, Epuquichi, bajo un seudónimo."
      ],
      respuestaCorrecta: 0
    },

    // --- MURAL 3: Estados emocionales ---
    {
      idMural: 3,
      pregunta: "En el mural 'Estados emocionales', el personaje se encuentra encogido con los brazos rodeando sus piernas. ¿Qué sensación principal transmite esta postura corporal?",
      opciones: [
        "Alegría y extroversión extrema.",
        "Relajación profunda tras una jornada de ejercicio físico.",
        "Agresividad y rebeldía contra el sistema educativo.",
        "Introspección y vulnerabilidad frente a sus procesos internos." // Correcta (3)
      ],
      respuestaCorrecta: 3
    },
    {
      idMural: 3,
      pregunta: "La artista decidió usar colores opacos y oscuros (tonos tierra) en lugar de colores vivos. ¿Qué efecto genera esta decisión visual en el mensaje de la obra?",
      opciones: [
        "Representa la vitalidad, el ruido y la energía del campus universitario.",
        "Simboliza el inicio de la primavera y la naturaleza en la universidad.",
        "Refuerza una atmósfera de silencio, soledad y reflexión profunda.", // Correcta (2)
        "Busca resaltar únicamente los colores de la bandera de la universidad."
      ],
      respuestaCorrecta: 2
    },

    // --- MURAL 4: La figura y la sombra ---
    {
      idMural: 4,
      pregunta: "Al observar la imagen del joven junto al gran animal oscuro, ¿qué contraste principal notas en la escena del mural?",
      opciones: [
        "Entre la tecnología moderna y la vida en el campo.",
        "Entre la figura humana, el animal simbólico y el entorno orgánico de hojas.", // Correcta (1)
        "Entre el día y la noche en las instalaciones del campus.",
        "Entre la vida académica en las aulas y las actividades deportivas."
      ],
      respuestaCorrecta: 1
    },
    {
      idMural: 4,
      pregunta: "El imponente animal negro se caracteriza por tener ojos blancos vacíos y estar al acecho. Según la interpretación de la imagen, ¿qué suele representar esta 'sombra' que acompaña al joven?",
      opciones: [
        "Los miedos, las ansiedades o la parte instintiva que habita en nuestro interior.", // Correcta (0)
        "La mascota oficial que cuida las instalaciones de la universidad.",
        "Un animal callejero buscando refugio en la academia.",
        "La estricta disciplina y reglas impuestas por la institución."
      ],
      respuestaCorrecta: 0
    },

    // --- MURAL 5: Cansancio cotidiano ---
    {
      idMural: 5,
      pregunta: "El mural 'Cansancio cotidiano' conecta inmediatamente con la rutina estudiantil al mostrar un teléfono vibrando que interrumpe el sueño. ¿Qué mensaje exacto muestra la alarma del dispositivo?",
      opciones: [
        "EXAMEN FINAL",
        "ENTREGA DE PROYECTO",
        "DESPERTAR",
        "CLASE 7:00 AM" // Correcta (3)
      ],
      respuestaCorrecta: 3
    },
    {
      idMural: 5,
      pregunta: "¿Cuál es el tema central que la artista Isba busca retratar con esta escena tan común del joven envuelto en cobijas?",
      opciones: [
        "La adicción a las redes sociales y a las pantallas en la juventud.",
        "La comodidad y lujo de las residencias universitarias.",
        "El descanso interrumpido y el sacrificio personal por la exigencia de la rutina diaria.", // Correcta (2)
        "La importancia de la tecnología en la educación a distancia."
      ],
      respuestaCorrecta: 2
    },
    {
      idMural: 5,
      pregunta: "A diferencia de los murales anteriores que no tienen una fecha exacta registrada, ¿en qué año se realizó esta obra titulada 'Cansancio cotidiano'?",
      opciones: [
        "2019",
        "2024", // Correcta (1)
        "2020",
        "2021"
      ],
      respuestaCorrecta: 1
    },

    // --- MURAL 6: Tecnología y pensamiento ---
    {
      idMural: 6,
      pregunta: "El mural 'Tecnología y pensamiento' presenta figuras humanas conectadas por líneas y cables. ¿Qué idea principal transmite esta forma de dibujar a los personajes?",
      opciones: [
        "Que estamos inmersos en sistemas, procesos y redes de circulación de información.", // Correcta (0)
        "El desarrollo del tendido eléctrico en la infraestructura universitaria.",
        "El aislamiento total de los estudiantes frente a las pantallas modernas.",
        "La historia de la radio y la televisión en el departamento de Boyacá."
      ],
      respuestaCorrecta: 0
    },
    {
      idMural: 6,
      pregunta: "A diferencia de un retrato tradicional, en esta obra los rostros y cuerpos no se ven como fotografías reales, sino armados con formas libres y llamativas. ¿Qué efecto busca este tipo de arte?",
      opciones: [
        "Mostrar exactamente cómo se vestían los estudiantes en el pasado.",
        "Servir como un plano para construir un nuevo edificio.",
        "Alejarse de la realidad exacta para representar ideas abstractas como la mente y la red.", // Correcta (2)
        "Hacer una publicidad comercial para la venta de computadores."
      ],
      respuestaCorrecta: 2
    },

    // --- MURAL 7: Conexión humana ---
    {
      idMural: 7,
      pregunta: "En la obra 'Conexión humana', los dos rostros que se besan llevan gafas oscuras que cubren sus ojos. Al observar la obra, ¿qué efecto logra este detalle?",
      opciones: [
        "Ocultar la identidad para proteger a los personajes de problemas legales.",
        "Desplazar nuestra atención de las miradas hacia el gesto íntimo y emocional del beso.", // Correcta (1)
        "Representar la ceguera física de los estudiantes.",
        "Darle un aspecto moderno de moda urbana a los protagonistas."
      ],
      respuestaCorrecta: 1
    },
    {
      idMural: 7,
      pregunta: "Para resaltar la calidez y cercanía del beso, ¿cómo utilizó la artista los colores de los personajes en comparación con el fondo?",
      opciones: [
        "Usó únicamente blanco y negro para dar un tono triste a la escena.",
        "Pintó los rostros con colores primarios como semáforos para generar tensión.",
        "Usó tonos azules y metálicos sobre un fondo blanco muy brillante.",
        "Usó colores de piel suaves y cálidos que resaltan fuertemente contra un fondo oscuro." // Correcta (3)
      ],
      respuestaCorrecta: 3
    },

    // --- MURAL 8: Biblioteca psicodélica ---
    {
      idMural: 8,
      pregunta: "Las figuras sentadas alrededor de la mesa presentan ojos muy abiertos, formas exageradas y colores irreales. ¿Qué emoción o reacción parecen expresar estos personajes?",
      opciones: [
        "Angustia, desconexión o una observación atónita de su entorno.", // Correcta (0)
        "Alegría desbordante por aprobar un examen difícil.",
        "Concentración extrema y paz interior durante el estudio.",
        "Indiferencia total y relajación profunda."
      ],
      respuestaCorrecta: 0
    },
    {
      idMural: 8,
      pregunta: "Aunque el mural muestra una biblioteca, los colores brillantes y las figuras extrañas hacen que el lugar se sienta diferente a la realidad. ¿A qué se parece más esta escena?",
      opciones: [
        "A un plano arquitectónico estricto del campus.",
        "A una fotografía documental exacta de la universidad.",
        "A un sueño, una ilusión o un laberinto mental del estudiante.", // Correcta (2)
        "A un paisaje campesino tradicional de Boyacá."
      ],
      respuestaCorrecta: 2
    },

    // --- MURAL 9: Anhelos silenciosos ---
    {
      idMural: 9,
      pregunta: "En la obra realista 'Anhelos silenciosos', el joven ubicado en el centro sostiene algo en sus manos con mucho cuidado. ¿Qué objeto es?",
      opciones: [
        "Un libro abierto donde reposa un pequeño pájaro.",
        "Una pequeña maqueta de una casa de madera.", // Correcta (1)
        "Un ramo de girasoles marchitos y secos.",
        "Un dispositivo móvil reproduciendo un video."
      ],
      respuestaCorrecta: 1
    },
    {
      idMural: 9,
      pregunta: "Al fijarte en los detalles de los tres jóvenes sentados en el sofá sin respaldo, ¿qué acción está realizando el personaje de la derecha?",
      opciones: [
        "Está totalmente descalzo mirando fijamente al suelo.",
        "Duerme profundamente apoyado sobre el hombro de su compañero.",
        "Sostiene unas flores marchitas entre sus manos.",
        "Lee un libro abierto sobre el cual posa tranquilamente un pequeño pájaro." // Correcta (3)
      ],
      respuestaCorrecta: 3
    },

    // --- MURAL 10: Refugio Interior ---
    {
      idMural: 10,
      pregunta: "En este mural, la escena de la joven en la cama parece estar dibujada como si nosotros estuviéramos flotando justo arriba de ella. ¿Qué efecto causa ver la escena desde tan alto?",
      opciones: [
        "Nos hace sentir como observadores silenciosos e íntimos de su momento de privacidad.", // Correcta (0)
        "Hace que la habitación se vea gigante y la persona diminuta.",
        "Nos produce mareo para representar el cansancio de la estudiante.",
        "Oculta intencionalmente el rostro del personaje para que no sepamos quién es."
      ],
      respuestaCorrecta: 0
    },
    {
      idMural: 10,
      pregunta: "La joven recostada sobre sábanas rosadas abraza una maceta con una planta. ¿Qué otros elementos la acompañan en la cama, reforzando la idea de un espacio muy personal?",
      opciones: [
        "Un perro guardián y un computador portátil encendido.",
        "Una pequeña maqueta de madera y girasoles marchitos.",
        "Un gato que duerme a su lado y varios libros abiertos descansando desordenados.", // Correcta (2)
        "Un teléfono móvil vibrando incesantemente sobre la almohada."
      ],
      respuestaCorrecta: 2
    },

    // --- MURAL 11: Fragmentación del ser ---
    {
      idMural: 11,
      pregunta: "En el mural 'Fragmentación del ser', vemos partes del rostro flotando separadas, como si se estuvieran desprendiendo. ¿Qué experiencia personal busca representar esta imagen?",
      opciones: [
        "El deseo del estudiante de someterse a una cirugía estética.",
        "Que armar rompecabezas es el pasatiempo principal en artes.",
        "La evolución de las inteligencias artificiales de reconocimiento facial.",
        "La sensación de sentirse 'desarmado', roto o perdiendo la identidad ante las crisis." // Correcta (3)
      ],
      respuestaCorrecta: 3
    },
    {
      idMural: 11,
      pregunta: "Para lograr que los pedazos del rostro parezcan estar verdaderamente separados y flotando, ¿qué truco visual utiliza el artista en el fondo de las piezas?",
      opciones: [
        "Sombras negras profundas que resaltan el vacío entre las partes.", // Correcta (0)
        "Brillos dorados para dar un aspecto de joya brillante.",
        "Dibuja flores de colores que llenan los espacios rotos.",
        "Líneas blancas muy gruesas que conectan las piezas como un plano."
      ],
      respuestaCorrecta: 0
    },

    // --- MURAL 12: Mirada al futuro ---
    {
      idMural: 12,
      pregunta: "La obra 'Mirada al futuro' muestra el perfil de un joven mirando fijamente y con seguridad hacia el horizonte. ¿Qué crees que simboliza la dirección de esa mirada en alguien que estudia en la universidad?",
      opciones: [
        "La búsqueda ansiosa de la salida más cercana del edificio.",
        "La visión de metas, propósitos y las oportunidades que vendrán al graduarse.", // Correcta (1)
        "La simple observación del paisaje natural del campus.",
        "La tristeza y nostalgia por los años que ya pasaron en el colegio."
      ],
      respuestaCorrecta: 1
    },

    // --- MURAL 13: El peso del saber ---
    {
      idMural: 13,
      pregunta: "En la imagen vemos a un personaje que, en lugar de cargar el mundo en su espalda (como el mito griego), carga una enorme pila de libros pesados. ¿Cuál es el mensaje sobre la vida académica?",
      opciones: [
        "Que la biblioteca de la UPTC necesita mejores y más grandes estantes.",
        "Que los estudiantes modernos prefieren usar libros digitales que físicos.",
        "La importancia de tener buena postura física al estudiar.",
        "La inmensa responsabilidad y el gran esfuerzo físico/mental que implica aprender." // Correcta (3)
      ],
      respuestaCorrecta: 3
    },

    // --- MURAL 14: Dualidad académica ---
    {
      idMural: 14,
      pregunta: "La obra divide un rostro en dos mitades: una parte está hecha con engranajes de máquinas y la otra con hojas y ramas. ¿Qué equilibrio intenta proponer este dibujo?",
      opciones: [
        "La competencia directa entre los que estudian ingeniería y los de ciencias agrarias.",
        "El uso de herramientas mecánicas modernas para ayudar en la agricultura.",
        "La armonía que debe existir entre el avance tecnológico y nuestra esencia natural/humana.", // Correcta (2)
        "La enorme diferencia visual entre estudiar de día y estudiar de noche."
      ],
      respuestaCorrecta: 2
    },

    // --- MURAL 15: Raíces de Boyacá ---
    {
      idMural: 15,
      pregunta: "El autor dibuja campesinos, ruanas e iconografía tradicional en las paredes de la universidad. ¿Cuál es la intención de llevar estos motivos rurales a un espacio académico?",
      opciones: [
        "Rendir homenaje al origen campesino, la cultura regional y el orgullo boyacense.", // Correcta (0)
        "Decorar el muro con temas del campo porque son más fáciles de pintar.",
        "Indicar que en ese edificio solo se dictan clases relacionadas con la agricultura.",
        "Dar una clase de historia sobre cómo se vestían las personas en el siglo pasado."
      ],
      respuestaCorrecta: 0
    },

    // --- MURAL 16: Simbiosis ---
    {
      idMural: 16,
      pregunta: "El mural final muestra gruesas raíces de árboles enredándose y fundiéndose pacíficamente con un cuerpo humano. ¿Qué idea transmite esta unión entre persona y planta?",
      opciones: [
        "Que el estudiante se quedó dormido tanto tiempo en el jardín que le crecieron raíces.",
        "Una interdependencia total donde el ser humano y la naturaleza se necesitan para crecer.", // Correcta (1)
        "El grave peligro que representan las plantas invasoras en la infraestructura vieja.",
        "Una clase de biología donde se compara la anatomía humana con la botánica."
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
      this.score = this.puntuacion;
      this.faseActual = 'resultados';
    }
  }

  reiniciarEvaluacion() {
    this.preguntaActual = 0;
    this.puntuacion = 0;
    this.evaluacionTerminada = false;
    this.opcionSeleccionada = null;
    this.mostrarResultado = false;
    this.faseActual = 'preguntas';
  }
  hacerScrollArriba() {
    const contenedorScroll = document.getElementById('scroll-interno-eval');
    if (contenedorScroll) {
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

  ////////////////////////////////////////////////////////////////////////////////////
  //Función para el botón de continuar
  iniciarPrueba(nombre: string) {
    this.messageError = '';

    if (!nombre || nombre.trim() === '') {
      this.messageError = 'Por favor, ingresa tu nombre antes de continuar';
      return;
    }

    if (this.exploracion === false) {
      this.cerrar.emit();
      this.abrirGaleria.emit();
      return;
    }

    if (this.exploracion === true) {
      this.nameUser = nombre.trim();
      this.faseActual = 'preguntas';
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////
  //Función que se llama cuando el usuario termina su última pregunta

  //Cargue de resultados en la base de datos (Formspree)

  sugerenciaEnviada: boolean = false;
  textoBotonCierre: string = 'Enviar y finalizar';
  errorSugerencia: boolean = false; // Para marcar el error si está vacío


  async envioResultados(comentario: string) {
    if (!comentario || !comentario.trim()) {
      this.errorSugerencia = true;
      return;
    }

    this.errorSugerencia = false;
    this.envioDatos = true;
    const urlFormspree = 'https://formspree.io/f/xjgplgwn';

    const datos = {
      name: this.nameUser,
      nota: `${this.puntuacion} / ${this.preguntas.length}`,
      exploroTodo: this.exploracion ? 'Sí' : 'No',
      sugerencias: comentario,
      date: new Date().toLocaleString()
    };

    try {
      await fetch(urlFormspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
      });
      this.envioDatos = false;
      this.sugerenciaEnviada = true;
      this.textoBotonCierre = '¡Gracias por participar!';

      setTimeout(() => {
        this.cerrar.emit();
      }, 2500);

    } catch (error) {
      alert('Hubo un problema al enviar. Por favor, intenta de nuevo.');
    } finally {
      this.envioDatos = false;
    }
  }
}
