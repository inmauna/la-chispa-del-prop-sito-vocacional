import { UnedDegree, VocationalQuestion, PurposeArchetype, CareerPath } from '../types';

export const UNED_DEGREES: UnedDegree[] = [
  {
    id: 'filosofia',
    title: 'Grado en Filosofía',
    faculty: 'Facultad de Filosofía · UNED',
    duration: '4 años (240 ECTS)',
    credits: 240,
    tagline: 'El rigor del pensamiento crítico frente a la complejidad contemporánea',
    description: 'Forma la capacidad de interrogar los fundamentos de la realidad, la ciencia, el lenguaje, la política y la moral. En una época saturada de respuestas automatizadas, la filosofía cultiva el arte de plantear las preguntas radicales que reorientan a la sociedad.',
    curatorialQuote: 'Una vida sin examen no merece la pena ser vivida.',
    authorQuote: 'Sócrates',
    competencies: [
      'Análisis lógico y argumentación crítica rigurosa',
      'Problematización ética de las tecnologías emergentes e inteligencia artificial',
      'Dominio de las corrientes del pensamiento clásico, moderno y contemporáneo',
      'Capacidad de síntesis conceptual y deliberación pública fundamentada'
    ],
    careerOutcomes: [
      'Comités de ética en biotecnología, sanidad y algoritmos de IA',
      'Consultoría estratégica de toma de decisiones y gobernanza',
      'Docencia universitaria y de enseñanza secundaria',
      'Gestión editorial, crítica cultural y comunicación pública'
    ],
    featuredSubjects: [
      { name: 'Historia de la Filosofía Antigua y Medieval', year: 1, credits: 6, type: 'Básica' },
      { name: 'Lógica I y II', year: 1, credits: 12, type: 'Obligatoria' },
      { name: 'Ética I y II', year: 2, credits: 12, type: 'Obligatoria' },
      { name: 'Filosofía de la Ciencia y la Técnica', year: 3, credits: 6, type: 'Obligatoria' },
      { name: 'Bioética y Filosofía Política Contemporánea', year: 4, credits: 6, type: 'Optativa' }
    ],
    idealFor: 'Mentes que no se conforman con lo obvio, apasionadas por la argumentación, la ética pública y el cuestionamiento de dogmas.',
    colorTheme: 'amber'
  },
  {
    id: 'historia-arte',
    title: 'Grado en Historia del Arte',
    faculty: 'Facultad de Geografía e Historia · UNED',
    duration: '4 años (240 ECTS)',
    credits: 240,
    tagline: 'Descodificar la memoria visual, la estética y el patrimonio de la humanidad',
    description: 'Proporciona una comprensión profunda de las manifestaciones artísticas, su iconografía, sus contextos sociopolíticos y la tutela del patrimonio cultural material e inmaterial, desde las cuevas paleolíticas hasta las instalaciones contemporáneas.',
    curatorialQuote: 'El arte no reproduce lo visible; hace visible lo que no siempre vemos.',
    authorQuote: 'Paul Klee',
    competencies: [
      'Lectura crítica e iconográfica de obras plásticas y arquitectónicas',
      'Catalogación, conservación preventiva y museografía científica',
      'Interpretación de los regímenes visuales contemporáneos e imágenes digitales',
      'Diseño y comisariado de proyectos expositivos y rutas patrimoniales'
    ],
    careerOutcomes: [
      'Conservación y mediación en museos, galerías y centros de arte',
      'Tasación, peritaje y asesoramiento en mercado de arte e instituciones',
      'Gestión de patrimonio histórico-artístico en administraciones públicas',
      'Turismo cultural sostenible, difusión de patrimonio y docencia'
    ],
    featuredSubjects: [
      { name: 'Arte Clásico en Grecia y Roma', year: 1, credits: 6, type: 'Básica' },
      { name: 'Iconografía y Mitología en el Arte', year: 1, credits: 6, type: 'Obligatoria' },
      { name: 'Arte del Renacimiento y Barroco', year: 2, credits: 12, type: 'Obligatoria' },
      { name: 'Museología y Gestión del Patrimonio Cultural', year: 3, credits: 6, type: 'Obligatoria' },
      { name: 'Vanguardias Históricas y Prácticas Contemporáneas', year: 4, credits: 6, type: 'Obligatoria' }
    ],
    idealFor: 'Personas con alta sensibilidad estética, fascinación por la narrativa visual, los museos y la salvaguarda de la memoria material.',
    colorTheme: 'stone'
  },
  {
    id: 'geografia-historia',
    title: 'Grado en Geografía e Historia',
    faculty: 'Facultad de Geografía e Historia · UNED',
    duration: '4 años (240 ECTS)',
    credits: 240,
    tagline: 'Comprender el espacio y el tiempo para transformar el presente',
    description: 'Integra el análisis diacrónico de los procesos históricos con la comprensión espacial y territorial del medio humano y físico. Otorga una mirada panorámica y contextual indispensable para interpretar crisis geopolíticas, territoriales y sociales.',
    curatorialQuote: 'Quien no conoce su historia está condenado a repetir sus extravíos.',
    authorQuote: 'George Santayana',
    competencies: [
      'Manejo de fuentes documentales, archivística y metodología paleográfica',
      'Sistemas de Información Geográfica (SIG) y ordenación del territorio',
      'Análisis diacrónico de coyunturas geopolíticas, económicas y demográficas',
      'Divulgación rigurosa de procesos históricos y memoria democrática'
    ],
    careerOutcomes: [
      'Cuerpos facultativos de archiveros, bibliotecarios y arqueólogos',
      'Técnicos de planificación territorial, demografía y desarrollo rural',
      'Análisis geopolítico y prospectiva en organismos internacionales y centros de estudios',
      'Docencia en secundaria, bachillerato e investigación histórica'
    ],
    featuredSubjects: [
      { name: 'Geografía General Física y Humana', year: 1, credits: 12, type: 'Básica' },
      { name: 'Historia Antigua y Medieval Universal', year: 1, credits: 12, type: 'Básica' },
      { name: 'Métodos y Técnicas de Investigación Histórica', year: 2, credits: 6, type: 'Obligatoria' },
      { name: 'Historia Contemporánea y Mundo Actual', year: 3, credits: 12, type: 'Obligatoria' },
      { name: 'Sistemas de Información Geográfica y Territorio', year: 4, credits: 6, type: 'Optativa' }
    ],
    idealFor: 'Investigadores natos que desean descifrar cómo las sociedades han llegado a ser lo que son y cómo habitamos el espacio.',
    colorTheme: 'emerald'
  },
  {
    id: 'lengua-literatura',
    title: 'Grado en Lengua y Literatura Españolas',
    faculty: 'Facultad de Filología · UNED',
    duration: '4 años (240 ECTS)',
    credits: 240,
    tagline: 'El dominio de la palabra: gramática viva y patrimonio literario hispánico',
    description: 'Estudia la evolución sincrónica y diacrónica del idioma español, su riqueza dialectal en la comunidad hispanohablante global y el canon literario desde el Siglo de Oro hasta las voces transatlánticas contemporáneas.',
    curatorialQuote: 'La palabra es el ser del hombre: sin palabra no hay pensamiento ni comunidad.',
    authorQuote: 'María Zambrano',
    competencies: [
      'Corrección de estilo, edición y crítica textual de alto nivel',
      'Lingüística teórica, fonología, sintaxis y pragmática del discurso',
      'Análisis hermenéutico de textos poéticos, teatrales y narrativos',
      'Aplicación de la lingüística a tecnologías del lenguaje y PLN'
    ],
    careerOutcomes: [
      'Edición literaria, corrección de pruebas y dirección editorial',
      'Lingüística computacional y entrenamiento de modelos de lenguaje',
      'Enseñanza de español como lengua extranjera (ELE) en el Instituto Cervantes y universidades',
      'Gestión de contenidos culturales, redacción creativa y medios de comunicación'
    ],
    featuredSubjects: [
      { name: 'Gramática Descriptiva y Fonética del Español', year: 1, credits: 12, type: 'Básica' },
      { name: 'Literatura Española de la Edad Media al Siglo de Oro', year: 1, credits: 12, type: 'Obligatoria' },
      { name: 'Semántica y Pragmática de la Lengua Española', year: 2, credits: 6, type: 'Obligatoria' },
      { name: 'Literatura Hispanoamericana Contemporánea', year: 3, credits: 6, type: 'Obligatoria' },
      { name: 'Edición, Crítica Textual y Tecnologías del Lenguaje', year: 4, credits: 6, type: 'Optativa' }
    ],
    idealFor: 'Amantes de la precisión léxica, la lectura profunda, la belleza literaria y el poder transformador de la voz escrita.',
    colorTheme: 'rose'
  },
  {
    id: 'estudios-ingleses',
    title: 'Grado en Estudios Ingleses',
    faculty: 'Facultad de Filología · UNED',
    duration: '4 años (240 ECTS)',
    credits: 240,
    tagline: 'Lengua, literatura y estudios culturales del ámbito anglófono global',
    description: 'Combina el dominio avanzado de la lengua inglesa como lengua franca internacional con el estudio de sus literaturas (británica, estadounidense y poscolonial) y el análisis de la cultura, la mediación intercultural y la traducción.',
    curatorialQuote: 'The limits of my language mean the limits of my world.',
    authorQuote: 'Ludwig Wittgenstein',
    competencies: [
      'Dominio lingüístico C1/C2 y análisis lingüístico del inglés contemporáneo',
      'Traducción directa e inversa en contextos humanísticos e institucionales',
      'Interpretación crítica de la literatura anglosajona y poscolonial',
      'Mediación cultural y comunicación en entornos multinacionales'
    ],
    careerOutcomes: [
      'Traducción literaria, audiovisual, especializada y corrección institucional',
      'Relaciones internacionales, diplomacia y organizaciones no gubernamentales',
      'Docencia del inglés en centros universitarios y secundarios',
      'Coordinación de proyectos culturales y editoriales multilingües'
    ],
    featuredSubjects: [
      { name: 'English Grammar & Phonetics', year: 1, credits: 12, type: 'Básica' },
      { name: 'Survey of British Literature to 1800', year: 1, credits: 6, type: 'Obligatoria' },
      { name: 'Literary & Cultural Theory in English', year: 2, credits: 6, type: 'Obligatoria' },
      { name: 'American Literature: 19th & 20th Century', year: 3, credits: 6, type: 'Obligatoria' },
      { name: 'Translation: English-Spanish / Spanish-English', year: 4, credits: 6, type: 'Obligatoria' }
    ],
    idealFor: 'Espíritus cosmopolitas con vocación por los puentes lingüísticos, la literatura en lengua inglesa y el diálogo transcultural.',
    colorTheme: 'blue'
  },
  {
    id: 'antropologia',
    title: 'Grado en Antropología Social y Cultural',
    faculty: 'Facultad de Filosofía · UNED',
    duration: '4 años (240 ECTS)',
    credits: 240,
    tagline: 'Desnaturalizar lo propio y comprender la pluralidad de modos de ser humano',
    description: 'Proporciona las herramientas metodológicas y teóricas de la etnografía para estudiar la diversidad de formas de vida, parentesco, rituales, identidades, migraciones y dinámicas comunitarias en un mundo en constante fricción y cambio.',
    curatorialQuote: 'El objetivo de la antropología es hacer del mundo un lugar seguro para las diferencias humanas.',
    authorQuote: 'Ruth Benedict',
    competencies: [
      'Investigación etnográfica cualitativa y observación participante',
      'Diagnóstico de problemáticas de convivencia intercultural y migración',
      'Evaluación de impacto social en políticas públicas y comunitarias',
      'Análisis crítico del etnocentrismo, género y construcciones simbólicas'
    ],
    careerOutcomes: [
      'Mediación intercultural en servicios sociales y proyectos de acogida',
      'Diseño y evaluación de políticas de inclusión y cooperación para el desarrollo',
      'Investigación cualitativa para diseño de servicios éticos y UX social',
      'Consultoría en diversidad, equidad y gestión comunitaria'
    ],
    featuredSubjects: [
      { name: 'Introducción a la Antropología Social y Cultural', year: 1, credits: 6, type: 'Básica' },
      { name: 'Métodos y Técnicas de Investigación en Etnografía', year: 1, credits: 6, type: 'Obligatoria' },
      { name: 'Antropología del Parentesco y la Familia', year: 2, credits: 6, type: 'Obligatoria' },
      { name: 'Migraciones, Relaciones Interétnicas y Ciudadanía', year: 3, credits: 6, type: 'Obligatoria' },
      { name: 'Antropología Urbana y de los Medios Digitales', year: 4, credits: 6, type: 'Optativa' }
    ],
    idealFor: 'Personas con profunda empatía social, curiosidad etnográfica y afán por deconstruir prejuicios culturales.',
    colorTheme: 'teal'
  }
];

export const VOCATIONAL_QUESTIONS: VocationalQuestion[] = [
  {
    id: 1,
    dimension: 'filosofia',
    dimensionLabel: 'Indagación Radical',
    question: 'Cuando contemplas las grandes controversias actuales sobre la Inteligencia Artificial, ¿qué interrogante despierta más tu inquietud?',
    philosophicalContext: 'La técnica siempre ha planteado dilemas ontológicos sobre la condición humana.',
    options: [
      {
        label: '¿Puede un algoritmo poseer conciencia moral o estamos delegando nuestra responsabilidad ética?',
        description: 'Búsqueda del fundamento moral y los límites del ser.',
        score: { filosofia: 3, antropologia: 1 }
      },
      {
        label: '¿Cómo transformará la IA las narrativas, la poesía y el estilo con que nos contamos el mundo?',
        description: 'Atención a la expresión poética, la autoría y el lenguaje.',
        score: { lengua: 3, arte: 1 }
      },
      {
        label: '¿Qué paralelismos históricos existen con otras revoluciones técnicas como la imprenta o la máquina de vapor?',
        description: 'Análisis contextual de las continuidades y rupturas temporales.',
        score: { historia: 3, filosofia: 1 }
      },
      {
        label: '¿De qué manera alterará las relaciones sociales y los ritos cotidianos de las comunidades?',
        description: 'Enfoque etnográfico sobre la diversidad y el lazo social.',
        score: { antropologia: 3, historia: 1 }
      }
    ]
  },
  {
    id: 2,
    dimension: 'arte',
    dimensionLabel: 'Sensibilidad Estética',
    question: 'Al entrar en una catedral gótica o en un pabellón de arquitectura contemporánea, ¿dónde se detiene primero tu mirada?',
    philosophicalContext: 'El espacio edificado es un testimonio físico de las aspiraciones espirituales y estéticas de una época.',
    options: [
      {
        label: 'En la armonía lumínica de las vidrieras, la proporción geométrica y el simbolismo de las formas.',
        description: 'Fascinación por la iconografía, la luz y la belleza formal.',
        score: { arte: 3, filosofia: 1 }
      },
      {
        label: 'En las vidas de los canteros anónimos, la economía feudal que lo financió y su lugar en el territorio.',
        description: 'Interés por las condiciones materiales y la estructura social histórica.',
        score: { historia: 3, antropologia: 1 }
      },
      {
        label: 'En la liturgia, los cantos y las ceremonias que cohesionaban a la comunidad en torno al templo.',
        description: 'Comprensión de los rituales culturales y el significado compartido.',
        score: { antropologia: 3, arte: 1 }
      },
      {
        label: 'En las inscripciones latinas talladas en piedra y el valor de la palabra como memoria eterna.',
        description: 'Amor por el texto original, la filología y la transmisión de la voz.',
        score: { lengua: 3, historia: 1 }
      }
    ]
  },
  {
    id: 3,
    dimension: 'lengua',
    dimensionLabel: 'La Fuerza de la Palabra',
    question: 'Frente a una novela clásica o un ensayo magistral, ¿cuál de estos aspectos te produce mayor goce intelectual?',
    philosophicalContext: 'El lenguaje no solo describe la realidad: funda mundos habitables.',
    options: [
      {
        label: 'La arquitectura sutil de las oraciones, la elección exacta de cada vocablo y el ritmo de la prosa.',
        description: 'Gusto refinado por la precisión lingüística y el estilo.',
        score: { lengua: 3, filosofia: 1 }
      },
      {
        label: 'Las ideas éticas de fondo sobre la justicia, el dolor y el sentido de la existencia.',
        description: 'Inclinación hacia la deliberación filosófica y el juicio moral.',
        score: { filosofia: 3, lengua: 1 }
      },
      {
        label: 'El retrato fidedigno de las costumbres, las clases sociales y los conflictos de la época retratada.',
        description: 'Mirada histórica sobre la mentalidad y las transformaciones de una época.',
        score: { historia: 3, antropologia: 1 }
      },
      {
        label: 'La universalidad de los mitos que atraviesan fronteras y dialogan con otras civilizaciones.',
        description: 'Perspectiva comparada entre culturas y cosmovisiones.',
        score: { antropologia: 2, arte: 2 }
      }
    ]
  },
  {
    id: 4,
    dimension: 'historia',
    dimensionLabel: 'Conciencia del Tiempo',
    question: 'Si pudieras dedicar un año sabático a investigar en archivos históricos, ¿qué tesoro documental buscarías con más fervor?',
    philosophicalContext: 'El archivo es el guardián de las voces que el olvido amenaza con apagar.',
    options: [
      {
        label: 'Cartas privadas y diarios de mujeres y campesinos del siglo XVII para reconstruir la vida cotidiana.',
        description: 'Historia desde abajo, microhistoria y antropología de lo íntimo.',
        score: { historia: 3, antropologia: 2 }
      },
      {
        label: 'Tratados inéditos de alquimia, filosofía natural y debates sobre el cosmos.',
        description: 'Historia de las ideas y la epistemología científica.',
        score: { filosofia: 3, historia: 1 }
      },
      {
        label: 'Bocetos, correspondencia epistolar entre maestros pintores y cuadernos de taller artístico.',
        description: 'Génesis creativa, técnica artística y contexto creador.',
        score: { arte: 3, historia: 1 }
      },
      {
        label: 'Manuscritos literarios con tachaduras y variantes dialectales que muestren el nacimiento de una lengua.',
        description: 'Crítica textual, evolución diacrónica y filología viva.',
        score: { lengua: 3, historia: 1 }
      }
    ]
  },
  {
    id: 5,
    dimension: 'antropologia',
    dimensionLabel: 'Mirada a la Otredad',
    question: 'Cuando viajas a un lugar con costumbres y lenguas radicalmente distintas a las tuyas, ¿cuál es tu impulso primordial?',
    philosophicalContext: 'Comprender al otro exige el valor de suspender las propias certezas.',
    options: [
      {
        label: 'Sentarme en los mercados locales a observar cómo negocian, comen y transmiten sus relatos familiares.',
        description: 'Observación participante y empatía etnográfica pura.',
        score: { antropologia: 3, lengua: 1 }
      },
      {
        label: 'Indagar en su museo arqueológico para entender cómo influyó su geografía en su destino histórico.',
        description: 'Geografía histórica y comprensión territorial.',
        score: { historia: 3, antropologia: 1 }
      },
      {
        label: 'Reflexionar sobre qué concepción del tiempo, del deber y de la muerte sostiene su cultura.',
        description: 'Filosofía comparada de las religiones y las cosmovisiones.',
        score: { filosofia: 3, antropologia: 1 }
      },
      {
        label: 'Apreciar su artesanía popular, la armonía de sus textiles y la arquitectura vernácula.',
        description: 'Patrimonio etnográfico y sensibilidad estética.',
        score: { arte: 3, antropologia: 1 }
      }
    ]
  },
  {
    id: 6,
    dimension: 'filosofia',
    dimensionLabel: 'Ética & Ciudadanía',
    question: 'En un debate sobre las desigualdades en el acceso a la cultura y la educación pública, ¿cuál es tu principio rector?',
    philosophicalContext: 'La educación humanística como bien público y garantía democrática universal.',
    options: [
      {
        label: 'El saber no es un privilegio de élites; es un derecho inalienable que emancipa la conciencia ciudadana.',
        description: 'Compromiso filosófico con la justicia distributiva y la libertad.',
        score: { filosofia: 3, historia: 1 }
      },
      {
        label: 'Todo pueblo tiene derecho a conocer y custodiar su propio patrimonio y sus relatos fundacionales.',
        description: 'Memoria histórica colectiva e identidad democrática.',
        score: { historia: 2, antropologia: 2 }
      },
      {
        label: 'El acceso a las artes y a la belleza visual ensancha el alma humana frente a la homogeneización mercantil.',
        description: 'Democratización de la experiencia estética y el museo.',
        score: { arte: 3, filosofia: 1 }
      },
      {
        label: 'Garantizar el dominio de la expresión verbal y la lectura crítica permite a cualquiera defender su dignidad.',
        description: 'Emancipación mediante la palabra y la alfabetización crítica.',
        score: { lengua: 3, filosofia: 1 }
      }
    ]
  },
  {
    id: 7,
    dimension: 'arte',
    dimensionLabel: 'Iconos & Contemporaneidad',
    question: '¿Qué papel crees que debe desempeñar un museo universitario en el siglo XXI?',
    philosophicalContext: 'Los museos han dejado de ser mausoleos para convertirse en foros de debate cívico.',
    options: [
      {
        label: 'Ser un laboratorio activo donde el público cuestione los relatos oficiales a través del arte.',
        description: 'Museología crítica y pensamiento estético renovador.',
        score: { arte: 3, historia: 1 }
      },
      {
        label: 'Un santuario de conservación rigurosa de testimonios que el paso de los siglos no debe destruir.',
        description: 'Custodia patrimonial, restauración e historia material.',
        score: { historia: 3, arte: 1 }
      },
      {
        label: 'Un espacio de encuentro comunitario donde diversas culturas dialoguen sin jerarquías etnocéntricas.',
        description: 'Mediación intercultural y decolonización del patrimonio.',
        score: { antropologia: 3, arte: 1 }
      },
      {
        label: 'Un archivo viviente de la poesía y los manifiestos que dieron voz a movimientos de vanguardia.',
        description: 'Conexión entre palabra, manifiesto y arte plástico.',
        score: { lengua: 2, arte: 2 }
      }
    ]
  },
  {
    id: 8,
    dimension: 'lengua',
    dimensionLabel: 'Traducción & Horizontes',
    question: 'Traducir un poema o un discurso de una lengua extranjera es:',
    philosophicalContext: 'La traducción es el acto supremo de hospitalidad lingüística (Paul Ricoeur).',
    options: [
      {
        label: 'Un acto de diplomacia profunda: tender un puente hospitalario entre dos almas culturales.',
        description: 'Hospitalidad lingüística, estudios ingleses e interculturales.',
        score: { lengua: 3, antropologia: 1 }
      },
      {
        label: 'Un desafío filosófico sobre si los conceptos más hondos son verdaderamente universales.',
        description: 'Hermenéutica, ontología y filosofía del lenguaje.',
        score: { filosofia: 3, lengua: 1 }
      },
      {
        label: 'Un testimonio de cómo las rutas de comercio y los imperios extendieron vocablos e influencias.',
        description: 'Contacto de lenguas e historia global de las comunicaciones.',
        score: { historia: 2, lengua: 2 }
      },
      {
        label: 'Una recreación artística autónoma, tan exigente y hermosa como pintar un cuadro nuevo.',
        description: 'Creación literaria y dimensión estética de la traducción.',
        score: { arte: 2, lengua: 2 }
      }
    ]
  },
  {
    id: 9,
    dimension: 'historia',
    dimensionLabel: 'Territorio & Paisaje',
    question: 'Al contemplar un paisaje agrario en terrazas o un centro histórico despoblado, ¿qué reflexión te asalta?',
    philosophicalContext: 'El territorio es un palimpsesto donde la acción humana dialoga con la geografía física.',
    options: [
      {
        label: 'Es un palimpsesto vivo: capas superpuestas de trabajo humano, decisiones políticas y cambios climáticos.',
        description: 'Geografía histórica, paisaje cultural y territorio.',
        score: { historia: 3, antropologia: 1 }
      },
      {
        label: 'El dolor del abandono de saberes ancestrales y la pérdida de formas de vida comunitaria valiosas.',
        description: 'Antropología rural, memoria colectiva y transición social.',
        score: { antropologia: 3, historia: 1 }
      },
      {
        label: 'La belleza melancólica de la ruina y la dialéctica entre la naturaleza y la obra humana.',
        description: 'Estética del paisaje y contemplación artística.',
        score: { arte: 2, filosofia: 2 }
      },
      {
        label: 'La necesidad de una filosofía ética del hábitat y la justicia espacial entre centro y periferia.',
        description: 'Ética medioambiental y filosofía política del espacio.',
        score: { filosofia: 3, historia: 1 }
      }
    ]
  },
  {
    id: 10,
    dimension: 'filosofia',
    dimensionLabel: 'La Chispa del Propósito',
    question: 'Al culminar tus estudios universitarios en Humanidades en la UNED, ¿qué huella íntima te gustaría dejar en el mundo?',
    philosophicalContext: 'El propósito no es una meta externa, sino la llama que da sentido a cada jornada de estudio.',
    options: [
      {
        label: 'Haber sembrado el pensamiento crítico que ayude a las personas a pensar por sí mismas sin tutelas.',
        description: 'Vocación socrática y pedagógica de libertad intelectual.',
        score: { filosofia: 3, lengua: 1 }
      },
      {
        label: 'Haber rescatado del olvido documentos o memorias silenciadas para iluminar el presente.',
        description: 'Compromiso riguroso con la verdad histórica y la justicia del recuerdo.',
        score: { historia: 3, antropologia: 1 }
      },
      {
        label: 'Haber acercado la conmoción del arte y la belleza a personas que creían que no era para ellas.',
        description: 'Vocación de mediación y enriquecimiento estético de la vida común.',
        score: { arte: 3, antropologia: 1 }
      },
      {
        label: 'Haber construido relatos y puentes de empatía que unan a comunidades aparentemente irreconciliables.',
        description: 'Fuerza pacificadora del lenguaje, la escucha y la comprensión antropológica.',
        score: { antropologia: 2, lengua: 2 }
      }
    ]
  }
];

export const PURPOSE_ARCHETYPES: Record<string, PurposeArchetype> = {
  filosofia: {
    id: 'el-filosofo-de-la-polis',
    title: 'El Pensador de la Polis',
    subtitle: 'Arquetipo de la Indagación Radical y la Ética Pública',
    philosophicalMotto: 'Cuestionar lo obvio para desvelar lo esencial.',
    description: 'Tu chispa se enciende ante la contradicción, el dogma no examinado y los dilemas morales de la convivencia. Posees una vocación intrínseca por la lucidez y el rigor conceptual. No temes la duda fértil; entiendes que una sociedad que deja de hacerse preguntas filosóficas se vuelve sonámbula ante el autoritarismo o la inercia tecnológica.',
    coreStrengths: [
      'Argumentación lógica implacable',
      'Discernimiento ético en dilemas complejos',
      'Sospecha fecunda ante las verdades impuestas',
      'Capacidad de diálogo socrático y mediación conceptual'
    ],
    recommendedDegrees: ['filosofia', 'geografia-historia', 'antropologia'],
    contemporaryMission: 'Guiar los debates sobre los límites éticos de la inteligencia artificial, asesorar en políticas públicas de bien común y renovar la educación cívica.',
    seminalThinker: 'Sócrates & Hannah Arendt',
    seminalQuote: 'Pensar y estar vivo son la misma cosa: quien no piensa es como si no estuviera verdaderamente despierto en el mundo.'
  },
  arte: {
    id: 'el-interprete-del-simbolo',
    title: 'El Intérprete del Símbolo',
    subtitle: 'Arquetipo de la Mirada Estética y la Memoria Visual',
    philosophicalMotto: 'Hacer visible lo que el mundo apresurado pasa por alto.',
    description: 'Posees una mirada que trasciende la superficie de las formas. Para ti, una pintura, una catedral o una fotografía son códices donde una civilización cifró sus anhelos, sus miedos y su idea de la trascendencia. Tu chispa arde cuando descifras la iconografía y cuando defiendes que la belleza y el patrimonio son derechos inalienables del espíritu humano.',
    coreStrengths: [
      'Agudeza visual e interpretación de regímenes de imágenes',
      'Conexión profunda entre forma plástica y contexto histórico',
      'Sensibilidad para la conservación patrimonial y la museología',
      'Comunicación evocadora de la experiencia estética'
    ],
    recommendedDegrees: ['historia-arte', 'geografia-historia', 'lengua-literatura'],
    contemporaryMission: 'Curar exposiciones que sacudan la indiferencia, defender el patrimonio histórico ante la especulación y humanizar los entornos urbanos mediante el arte.',
    seminalThinker: 'Aby Warburg & Erwin Panofsky',
    seminalQuote: 'Dios está en los detalles; y en cada imagen late el eco de una emoción humana originaria.'
  },
  historia: {
    id: 'el-custodio-de-la-memoria',
    title: 'El Custodio de la Memoria',
    subtitle: 'Arquetipo del Tiempo, el Territorio y la Verdad Documental',
    philosophicalMotto: 'Iluminar el pasado para no caminar a ciegas hacia el porvenir.',
    description: 'Sientes una reverencia profunda por los rastros del tiempo: los legajos amarilleados en los archivos, los mapas orográficos, las voces orales y las ruinas que nos interpelan. Sabes que el presente es solo la cresta de una ola empujada por siglos de victorias, sufrimientos y acuerdos colectivos. Tu vocación es la verdad histórica rigurosa.',
    coreStrengths: [
      'Paciencia investigadora y manejo riguroso de fuentes primarias',
      'Visión diacrónica que distingue lo coyuntural de lo estructural',
      'Sensibilidad para el paisaje y la geografía territorial',
      'Compromiso inquebrantable con la verdad factual y la memoria'
    ],
    recommendedDegrees: ['geografia-historia', 'historia-arte', 'antropologia'],
    contemporaryMission: 'Desarticular la desinformación histórica y los mitos revisionistas, asesorar en planificación territorial sostenible y salvaguardar los archivos públicos.',
    seminalThinker: 'Marc Bloch & Fernand Braudel',
    seminalQuote: 'La incomprensión del presente nace fatalmente de la ignorancia del pasado.'
  },
  lengua: {
    id: 'la-tejedora-del-lenguaje',
    title: 'La Tejedora del Lenguaje',
    subtitle: 'Arquetipo de la Palabra Viva, la Hermenéutica y la Poética',
    philosophicalMotto: 'La palabra bien nombrada emancipa la conciencia.',
    description: 'Para ti, el lenguaje no es un mero código de transmisión: es la morada del ser, el taller donde se esculpe el pensamiento y la herramienta con la que nos consolamos y nos rebelamos. Tienes el don de percibir la cadencia precisa, la etimología que revela el origen de una emoción y la belleza imborrable de un verso bien forjado.',
    coreStrengths: [
      'Dominio magistral de la retórica, la sintaxis y el estilo',
      'Lectura profunda capaz de hallar múltiples capas de sentido',
      'Capacidad de edición y corrección con exactitud casi quirúrgica',
      'Apertura al puente hospitalario de la traducción y el bilingüismo'
    ],
    recommendedDegrees: ['lengua-literatura', 'estudios-ingleses', 'filosofia'],
    contemporaryMission: 'Cuidar la salud del discurso público contra el empobrecimiento expresivo, entrenar modelos lingüísticos humanizados y publicar obras que transformen vidas.',
    seminalThinker: 'María Zambrano & Antonio Machado',
    seminalQuote: 'Quien tiene la palabra tiene la llave de su propia libertad y la lumbre de su comunidad.'
  },
  antropologia: {
    id: 'el-cartografo-de-la-diversidad',
    title: 'El Cartógrafo de la Diversidad',
    subtitle: 'Arquetipo de la Escucha Etnográfica y la Coexistencia Cultural',
    philosophicalMotto: 'Desnaturalizar lo propio para acoger la riqueza de lo distinto.',
    description: 'Miras el mundo sin la arrogancia del que cree que su modo de vivir es el único natural. Posees una curiosidad incansable por los ritos cotidianos, los lazos de parentesco, las identidades migrantes y las formas en que cada pueblo hace habitable su mundo. Tu propósito es ser mediador de concordia y desmantelar los prejuicios etnocéntricos.',
    coreStrengths: [
      'Empatía radical y observación participante sin juicio previo',
      'Diagnóstico de tensiones comunitarias e interculturales',
      'Deconstrucción de estereotipos y categorías naturalizadas',
      'Capacidad para tender puentes entre políticas institucionales y realidad humana'
    ],
    recommendedDegrees: ['antropologia', 'geografia-historia', 'filosofia'],
    contemporaryMission: 'Facilitar la integración de comunidades diversas en ciudades contemporáneas, asesorar en cooperación internacional y humanizar los servicios públicos.',
    seminalThinker: 'Claude Lévi-Strauss & Clifford Geertz',
    seminalQuote: 'El sabio no es el que da las respuestas correctas; es el que hace las preguntas que abren horizontes de convivencia.'
  }
};

export const CAREER_HORIZONS: CareerPath[] = [
  {
    id: 'etica-ia',
    title: 'Ética de la Inteligencia Artificial y Filosofía de la Tecnología',
    field: 'Tecnología Humanizada & Gobernanza',
    tagline: 'Garantizar que los algoritmos sirvan a la dignidad humana, la justicia y la no discriminación.',
    description: 'Las empresas tecnológicas líderes y las instituciones regulatorias europeas (AI Act) exigen filósofos y humanistas para auditar sesgos, redactar cartas de derechos digitales y dirimir los límites éticos de los agentes autónomos.',
    keySkills: ['Epistemología moral', 'Lógica formal', 'Derechos digitales', 'Auditoría de sesgos algorítmicos'],
    degreesConnected: ['Grado en Filosofía', 'Grado en Lengua y Literatura'],
    futureProjection: 'Alta demanda en expansión europea (+38% en 5 años)',
    realWorldImpact: 'Redacción de las directrices de gobernanza de la IA en la UE y comités de integridad tecnológica.'
  },
  {
    id: 'pln-humanidades-digitales',
    title: 'Lingüística Computacional & Humanidades Digitales',
    field: 'Ciencia de Datos Humanística',
    tagline: 'Entrenar modelos de lenguaje natural con precisión semántica y curaduría cultural.',
    description: 'Los filólogos y lingüistas son hoy indispensables para diseñar corpus de entrenamiento, etiquetado sintáctico de precisión, desambiguación semántica y análisis forense de textos en plataformas globales.',
    keySkills: ['Gramática formal', 'Fonología acústica', 'Semántica de distribución', 'Anotación lingüística de corpus'],
    degreesConnected: ['Grado en Lengua y Literatura Españolas', 'Grado en Estudios Ingleses'],
    futureProjection: 'Demanda crítica en laboratorios de IA y motores de búsqueda',
    realWorldImpact: 'Modelos de lenguaje en español que preservan la diversidad dialectal de 500 millones de hablantes.'
  },
  {
    id: 'gestion-patrimonio-museologia',
    title: 'Dirección de Museos, Comisariado y Conservación Patrimonial',
    field: 'Industrias Culturales & Museografía',
    tagline: 'Custodiar la memoria material y comisariar experiencias que conmuevan al público.',
    description: 'Gestión de museos nacionales e internacionales, fundaciones de arte, tasación, comisariado de bienales y diseño de planes directores de monumentos y conjuntos arqueológicos históricos.',
    keySkills: ['Iconografía avanzada', 'Catalogación científica', 'Conservación preventiva', 'Diseño curatorial y mediación'],
    degreesConnected: ['Grado en Historia del Arte', 'Grado en Geografía e Historia'],
    futureProjection: 'Sector patrimonial y turístico de alto valor añadido',
    realWorldImpact: 'Restauración y reinterpretación comunitaria de bienes Patrimonio de la Humanidad UNESCO.'
  },
  {
    id: 'analisis-geopolitico-prospectiva',
    title: 'Análisis Geopolítico, Archivos del Estado y Diplomacia',
    field: 'Relaciones Internacionales & Políticas Públicas',
    tagline: 'Comprender los conflictos territoriales y las raíces históricas de las crisis globales.',
    description: 'Los historiadores y geógrafos aportan el espesor temporal y territorial necesario para evitar análisis coyunturales superficiales en ministerios de exteriores, agencias de inteligencia, ONG y embajadas.',
    keySkills: ['Análisis diacrónico', 'Manejo de fuentes archivísticas', 'Sistemas de Información Geográfica (SIG)', 'Diplomacia cultural'],
    degreesConnected: ['Grado en Geografía e Historia', 'Grado en Antropología'],
    futureProjection: 'Cuerpos superiores de la administración pública y think tanks globales',
    realWorldImpact: 'Resolución de contenciosos fronterizos y diseño de acuerdos de memoria y paz territorial.'
  },
  {
    id: 'mediacion-intercultural-cooperacion',
    title: 'Mediación Intercultural, DDHH y Políticas Etnográficas',
    field: 'Desarrollo Social Comunitario',
    tagline: 'Construir puentes de convivencia en barrios multiculturales y proyectos de ayuda humanitaria.',
    description: 'La formación etnográfica permite intervenir con rigor en contextos de acogida de refugiados, gestión de diversidad religiosa, programas de despolarización vecinal y defensa de pueblos originarios.',
    keySkills: ['Investigación cualitativa participante', 'Resolución de conflictos etnoculturales', 'Evaluación de impacto social', 'Derechos humanos'],
    degreesConnected: ['Grado en Antropología Social y Cultural', 'Grado en Filosofía'],
    futureProjection: 'Creciente necesidad en ayuntamientos, comunidades autónomas y agencias internacionales',
    realWorldImpact: 'Planes de acogida e integración ciudadana con más del 90% de adherencia comunitaria.'
  },
  {
    id: 'edicion-critica-periodismo-pensamiento',
    title: 'Edición Literaria, Ensayo Crítico y Dirección Editorial',
    field: 'Comunicación, Prensa y Edición',
    tagline: 'Dar forma a los libros e ideas que marcarán el rumbo del debate público.',
    description: 'Dirección de sellos editoriales independientes y grandes grupos, traducción de obras seminales, crítica en suplementos culturales y periodismo de investigación de largo aliento.',
    keySkills: ['Edición de manuscritos', 'Crítica literaria', 'Traducción especializada', 'Dirección de colecciones ensayísticas'],
    degreesConnected: ['Grado en Lengua y Literatura Españolas', 'Grado en Estudios Ingleses', 'Grado en Filosofía'],
    futureProjection: 'Renacimiento del libro en papel de calidad y suscripciones culturales de fondo',
    realWorldImpact: 'Descubrimiento y publicación de nuevas voces del pensamiento iberoamericano y europeo.'
  }
];

export const DAILY_SPARKS = [
  {
    day: 'Hoy',
    thinker: 'María Zambrano',
    century: 'Filosofía española del siglo XX',
    sparkPrompt: '¿Qué palabra silenciada en tu rutina diaria necesita hoy ser nombrada con valentía?',
    sparkQuote: 'El corazón humano no es un simple músculo: es el lugar donde el pensamiento se vuelve lágrima, júbilo y compromiso con los demás.',
    reflectionGuide: 'En la UNED entendemos que estudiar a distancia no significa estudiar en soledad: significa conquistar el silencio propio para que emerja tu auténtico pensamiento.'
  },
  {
    day: 'Semana',
    thinker: 'Séneca',
    century: 'Córdoba, siglo I',
    sparkPrompt: '¿Inviertes tu tiempo en lo que nutre tu espíritu o en lo que simplemente llena la agenda?',
    sparkQuote: 'No es que tengamos poco tiempo, sino que perdemos mucho.',
    reflectionGuide: 'La educación humanística de la UNED está diseñada precisamente para personas con vidas complejas que desean dedicar su tiempo a lo que de verdad perdura.'
  }
];

export const UNED_CENTERS_HIGHLIGHT = [
  { city: 'Madrid', center: 'Sede Central & Centros Madrid-Sur / Madrid-Norte', studentsCount: '32.000+ estudiantes' },
  { city: 'Barcelona', center: 'Centro Asociado UNED Barcelona (Nou Barris / Santa Coloma)', studentsCount: '14.000+ estudiantes' },
  { city: 'Sevilla', center: 'Centro Asociado UNED Sevilla', studentsCount: '8.500+ estudiantes' },
  { city: 'Valencia', center: 'Centro Asociado Francisco Tomás y Valiente', studentsCount: '9.200+ estudiantes' },
  { city: 'A Coruña', center: 'Centro Asociado UNED A Coruña & Ferrol', studentsCount: '5.100+ estudiantes' },
  { city: 'Zaragoza', center: 'Centro Asociado UNED Zaragoza', studentsCount: '4.800+ estudiantes' },
  { city: 'Tenerife / Las Palmas', center: 'Centros Asociados en Canarias', studentsCount: '6.400+ estudiantes' },
  { city: 'Centros en el Exterior', center: 'París, Londres, Bruselas, Frankfurt, Berna, Buenos Aires, Sao Paulo, Tokio', studentsCount: 'Red internacional' }
];
