export default {
  global: {
    componenteFormativo:
      'Diagramas para la especificación y análisis de requisitos',
    descripcionCurso:
      'En este componente formativo se abordan los saberes de ingeniería de requisitos para el levantamiento de requerimientos que permiten tener una visión del comportamiento del <i>software</i> que se va a desarrollar. La descripción de funcionalidades se realiza con Diagramas y elementos como casos de uso, historias de usuario que describen las interacciones del usuario con el <i>software</i>.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Características lenguaje Unificado de Modelado UML',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Evolución del Lenguaje Unificado de Modelado UML',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Características generales de Lenguaje Unificado de Modelado UML',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Especificación y análisis de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Diagrama de casos de uso',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Componentes de los diagramas de casos de uso',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Relaciones de Casos de uso',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Especificación de casos de uso',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Casos de uso reales (prototipos)',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Historias de usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Elementos de una Historias de Usuario',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Ejemplos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Plantillas',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Diagrama de actividades',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Elementos de un diagrama de actividades',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Ejemplo diagrama de actividades',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Booch, G., Rumbaugh, J., Jacobson, I., Molina, J. J. G., & Martínez, J. S. (2006). El lenguaje unificado de modelado: guía del usuario. Addison-Wesley.',
    },
    {
      referencia:
        'Booch, G. (1994). Object-oriented analysis and design. Redwood City.',
    },
    {
      referencia:
        'Cohn, M. (2018). User Stories and User Story Examples by Mike Cohn. [online] Mountain Goat Software. https://www.mountaingoatsoftware.com/agile/user-stories',
    },
    {
      referencia:
        'Cohn, M. (2004). User stories applied: For agile software development. Addison-Wesley Professional.',
    },
    {
      referencia:
        'Gutiérrez, J.  (s.f.). Diagramas UML de casos de uso y de requisitos. ',
      link:
        'http://www.lsi.us.es/~javierj/cursos_ficheros/metricaUML/CasosUsoUML.pdf',
    },
    {
      referencia:
        'Larman, 2002 Larman, C. “Applying UML and Patterns: An Introduction to Object-Oriented Analysis and Design and the Unified Process”. 2nd Ed. Prentice Hall, 2002.',
    },
    {
      referencia:
        'Norris & Rigby. “Ingeniería de software explicada”, 1 edición Editorial Megabyte-Noriega editores, México,1994.',
    },
    {
      referencia:
        'Schmuller, J., & Garza Marín, A. D. (2000). Aprendiendo UML en 24 horas.',
    },
    {
      referencia:
        'Wake, W.C.  2003 “Extreme Programming Explored” y “Refactoring Workbook”',
    },
  ],
  glosario: [
    {
      termino: 'Ágil',
      significado:
        'Comprende un conjunto de tareas o acciones que se utilizan para producir y mantener productos, así como para lograr los objetivos del proceso. La actividad incluye los procedimientos, estándares, políticas y objetivos para crear y modificar un conjunto de productos de trabajo.',
    },
    {
      termino: 'Método',
      significado:
        'Indica cómo construir técnicamente el software. Se incluyen técnicas de modelado y otras técnicas descriptivas.',
    },
    {
      termino: 'Metodología',
      significado: 'Colección de métodos para resolver un tipo de problemas.',
    },
    {
      termino: 'Requerimiento',
      significado:
        'Se refiere a la petición que se hace de algo que se solicita.',
    },
    {
      termino: 'Requisito',
      significado:
        'Es la condición que debe cumplir algo, en general este cumple con lo que se requiere con el requerimiento.',
    },
    {
      termino: '<em>Stakeholders</em>',
      significado:
        'Individuo u organización que comparte, reclama o le interesa un sistema o le compete una característica que satisface sus necesidades y expectativas.',
    },
  ],
  complementario: [
    {
      texto:
        'Nicosiored. (2017, November 22). Diagrama de Casos de Uso II - 5 - Tutorial UML en español. [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=DUjBnEvIm1M&list=PLM-p96nOrGcaw5dhv8wOA5tVVWEmXtA2F&index=5',
    },
    {
      texto:
        'Nicosiored. (2018, January 31). Diagrama de Actividades - 15 - Tutorial UML en español. [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=GoYdpOVhDRc&list=PLM-p96nOrGcaw5dhv8wOA5tVVWEmXtA2F&index=15',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Zulema Yidney León Escobar',
        cargo: 'Experta temática',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de gestión industrial - Regional Bogotá Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro: 'Centro de diseño y metrología - Regional Bogotá Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la industria de la comunicación gráfica - Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Duran Lopez',
        cargo: 'Diseño web',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
