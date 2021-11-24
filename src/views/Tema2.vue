<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Especificación y análisis de requisitos
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 La función más importante de la Especificación de Requisitos es servir de intermediario para que los clientes, los analistas de requisitos, desarrolladores y los usuarios puedan comunicarse. En esta es fundamental recolectar tanto los requerimientos de usuario y del cliente como los del #[i software] a desarrollar para lograr la satisfacción del cliente, por eso es importante el uso de técnicas que permitan representar de una manera visual e intuitiva estos requerimientos.
        p.mb-0 Cuando se realiza la recolección de requerimientos de un cliente, UML por medio de sus casos de uso permite el modelado de estos requerimientos. Los stackholders (actores externos) que están interesados en el producto son incluidos en el modelado con las funcionalidades requeridas (casos de uso) estos a su vez son modelados incluyendo relaciones y asociaciones jerárquicamente divididas entre ellos.
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img7.png', style="width:650px;")
    .row.mb-5(data-aos="fade-up")
      .col-lg-6.p-4.bg-color7
        figure
          img(src='@/assets/curso/img7.svg', style="width:550px;").m-auto
      .col-lg-6.p-4.bg-color8
        .row
          .col-12
            p.mb-0.mt-4.text-white Quienes especifican los requerimientos de un cliente son los casos de uso y sus actores, qué es la expectativa que cada uno tiene del sistema, sin tener en cuenta la funcionalidad que se realizará. Los análisis de requisitos se realizan para diferentes procesos no necesariamente para desarrollos de #[i software]. Entre los diagramas más relevantes (y más utilizados) que se encuentran en UML están los diagramas de casos de uso, por lo que a continuación se realiza una definición más detallada de ellos.
    #t_2_1
    .titulo-segundo.color-secundario
      h2 2.1 Diagrama de Casos de Uso
    .row.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img8.png', style="width:650px;")
      .col-lg-6
        p.mb-0 Los casos de uso permiten la descripción de cada una de las funciones de las aplicaciones a desarrollar desde el punto de vista del usuario. Su utilización radica en expresar las funcionalidades que el producto de #[i software] debe efectuar y poder definir las personas que serán las encargadas de ejecutar estas funcionalidades. Es una técnica que consiste en hacer un diagrama con su respectiva notación. El caso de uso representa el comportamiento del #[i software] en la interacción con el usuario, para que este alcance un objetivo, por lo que, un caso de uso se compone de esos elementos que hacen parte de su notación.
    separador.mb-5
    #t_2_2
    .titulo-segundo.color-secundario
      h2 2.2 Componentes de los diagramas de casos de uso
    .row.pb-5.px-5.bg-color9
      .col-12.pt-5#menu1
        p.mt-5 La notación de un diagrama de caso de uso se compone principalmente de 3 elementos que ayudan a representar simbólicamente las funcionalidades, personas involucradas y relación entre estas y los cuales son: los actores, las relaciones y los casos de uso. A continuación, se describe cada uno de ellos:
        .row.justify-content-evenly.img-position2
          .col-3
            a(href="#1A")
              figure.efect1
                img(src="@/assets/curso/img10.svg", style="width:170px").m-auto
          .col-3
            a(href="#2A")
              figure.efect1
                img(src="@/assets/curso/img11.svg", style="width:170px").m-auto
          .col-3
            a(href="#3A")
              figure.efect1
                img(src="@/assets/curso/img12.svg", style="width:170px").m-auto
    #1A
    br
    br
    .row.py-5.align-items-center.justify-content-between
      .col-4
        h3.mb-0.text-deco2 #[b Actor]
      .col-2
        a(href="#menu1")
          figure.efect1
            img(src="@/assets/curso/img13.svg", style="width:50px").m-auto
    .row.align-items-start
      .col-lg-6.mb-4.mb-lg-0
        p Especifica un rol que ejecutará un usuario, representa a una persona o grupo de personas que interactúan con un #[i software], se representa mediante un hombre de palo “stick man” con el nombre del actor (obligatorio). El uso de los actores se realiza para mostrar la clase de usuario que participará en el sistema el cuál será el encargado de realizar una función, por lo que los nombres de los actores normalmente inician con mayúscula.
        p.mb-0 Existen varios tipos de actores según (Larman, 2002), los cuales se describen en la siguiente figura:
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img9.png', style="width:650px;").m-auto
    .row.pb-5.px-5.bg-color10
      .col-12(data-aos="fade-down")
        .row.justify-content-evenly.img-position3
          .col-8.col-lg-3.p-4.mb-4.mb-lg-0.bg-color11
            h4.text-white.mt-5 Principales
            p.text-white.mb-5 Son aquellos que se especifican para localizar cada uno de los objetivos de un usuario que son dirigidos por los casos de uso.
          .col-8.col-lg-3.p-4.mb-4.mb-lg-0.bg-color12
            h4.text-white.mt-5 De apoyo
            p.text-white.mb-5 Son los que brindan un servicio al sistema como un sistema informático, se definen para dar claridad a las interfaces externas.
          .col-8.col-lg-3.p-4.mb-4.mb-lg-0.bg-color13
            h4.text-white.mt-5 Los pasivos
            p.text-white.mb-5 Son aquellos que se interesan en el funcionamiento del caso de uso, pero no es un actor principal.
    br
    br
    .row.pt-0.pt-lg-5.mb-5
      .col-lg-8.mb-4.mb-lg-0
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 En la figura que se muestra a continuación, se observa cómo se representa de manera gráfica un actor en un UML, al cual también se le adiciona el nombre del actor correspondiente para dar mayor claridad en el proceso.
        p Además, se debe tener en cuenta que no necesariamente los actores son personas, pese a que estos estén personificados por formas humanas en el diagrama de casos de uso. Por lo anterior, los sistemas externos también son actores, que pueden requerir alguna información del sistema real o tener alguna interacción con él como una base de datos, por ejemplo.
        p.mb-0 Al momento de determinar los casos de uso se hace necesario identificar el actor. Este es el nombre que se le da al usuario cuando desempeña ese papel, por lo que ellos llevan a cabo los casos de uso. Teniendo en cuenta lo anterior cada uno de ellos tiene la posibilidad de hacer diferentes casos de uso y viceversa. Para identificar un actor solo es necesario visualizar los roles que interactúan en el sistema.
      .col-lg-4
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img14.svg', style="width:650px;").m-auto
    .row.py-5.px-5.bg-color7
      .col-12
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p #[b Ejemplo 1]
            p Para explicar cada uno de los elementos de un caso de uso se plantea el siguiente ejemplo de un requerimiento:
            .row.mb-4
              .col-12.bg-color15
                p.mb-0 “Una empresa solicita tener un sistema que permita hacer el proceso de generación de factura de venta a un comerciante, la cuál debe ser enviada por medio de un sistema externo que se encargará del proceso de la factura”
            p #[b Los actores identificados en los requerimientos del ejemplo 1 son: comerciante y sistema externo, los cuales se muestran en la figura a continuación.]
          .col-lg-6
            figure(data-aos="fade-right")
              img(src='@/assets/curso/img15.svg', style="width:650px;").m-auto
    #2A
    hr
    br
    br
    .row.pb-5.align-items-center.justify-content-between
      .col-4
        h3.mb-0.text-deco2 #[b Relación]
      .col-2
        a(href="#menu1")
          figure.efect1
            img(src="@/assets/curso/img13.svg", style="width:50px").m-auto
    .row
      .col-12
        p Un actor interactúa con un caso de uso y está representado por una relación su símbolo es una línea o una flecha, la cual se muestra en la figura que se observa a continuación:
        .row.align-items-center.mb-4
          .col-lg-6.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src='@/assets/curso/img16.svg', style="width:650px;").m-auto
          .col-lg-6
            p A continuación, se describen diferentes tipos de relaciones según los actores mencionados anteriormente:
            ul.lista-ul.ms-3
              li
                i.fab.fa-buffer(style="color:#039BE5;")
                |
                p.mb-0 La relación entre un actor y un caso de uso se llama #[b relación de comunicación], esta se distingue por los actores pasivos o activos.
              li
                i.fab.fa-buffer(style="color:#039BE5;")
                | El actor activo inicial o dispara la ejecución del caso de uso y la línea o flecha apunta al caso de uso.
              li
                i.fab.fa-buffer(style="color:#039BE5;")
                | El actor pasivo no inicia el caso de uso y la flecha apunta al actor.
              li
                i.fab.fa-buffer(style="color:#039BE5;")
                | El tipo de comunicación o la relación entre los casos de uso y los actores forman la asociación directa con el caso de uso.
              li
                i.fab.fa-buffer(style="color:#039BE5;")
                | La manera de expresar es que el actor ejecuta el caso de uso.
        p.mb-5 #[b Continuando con el ejemplo 1 se identifican las siguientes relaciones de comunicación:]
        .row.justify-content-evenly(data-aos="fade-up")
          .col-5.col-lg-3.mb-4.px-0.bg-color14
            img(src='@/assets/curso/img10.png', style="width:650px;").m-auto
            .row
              .col-12.p-4
                p Entre el comerciante y la generación de la factura.
          .col-5.col-lg-3.mb-4.px-0.bg-color14
            img(src='@/assets/curso/img11.png', style="width:650px;").m-auto
            .row
              .col-12.p-4
                p Entre el comerciante y el envío de la factura.
          .col-5.col-lg-3.mb-4.px-0.bg-color14
            img(src='@/assets/curso/img12.png', style="width:650px;").m-auto
            .row
              .col-12.p-4
                p Entre la factura y el sistema externo.
    #3A
    hr
    br
    br
    .row.pb-5.align-items-center.justify-content-between
      .col-4
        h3.mb-0.text-deco2 #[b Caso de Uso]
      .col-2
        a(href="#menu1")
          figure.efect1
            img(src="@/assets/curso/img13.svg", style="width:50px").m-auto
    .row.mb-5.justify-content-center
      .col-lg-5.mb-4.mb-lg-0
        p Los casos de uso se identifican a través de los verbos o acciones que el actor realiza o realizará, estas pueden describir, graficar y nombrar de la siguiente manera:
        ul.lista-ul.ms-3
          li
            i.fab.fa-buffer(style="color:#039BE5;")
            | Se representa mediante un óvalo e indica una función que el sistema debe proveer.
          li
            i.fab.fa-buffer(style="color:#039BE5;")
            | El caso de uso debe ser de fácil lectura e interpretación tanto para los desarrolladores como para el cliente para el nombre se sugiere usar un verbo infinitivo con un complemento.
      .col-lg-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img17.svg', style="width:650px;").m-auto
    .row.py-5.px-5.mb-5.bg-color4
      .col-12
        .row.align-items-center
          .col-lg-6
            .cajon.color-secundario.p-4.mb-4
              p.mb-0 Los casos de uso que se identifican para el ejemplo 1 son: generar factura y enviar factura, los cuales se ven representados gráficamente en la siguiente figura.
          .col-lg-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img18.svg', style="width:350px;").m-auto
    p.mb-5 A continuación, se presenta un ejemplo de la representación gráfica del diagrama de caso de uso con los actores, relaciones y caso de uso del problema del Ejemplo 1 propuesto anteriormente.
    .row.mb-5.justify-content-center
      .col-lg-10
        h3 Problema
        .row.mb-5
          .col-12.bg-color15
            p.mb-0  “Una empresa solicita tener un sistema que permita hacer el proceso de generación de factura de venta a un comerciante la cuál debe ser enviada por medio de un sistema externo que se encargará el proceso de la factura”
        figure(data-aos="fade-down")
          img(src='@/assets/curso/img19.svg', style="width:950px;").m-auto
    p.mb-5 Por otro lado, los pasos para realizar el diseño del diagrama de casos de uso que se muestra en la figura anterior del sistema de venta se pueden ver en el siguiente recurso de aprendizaje:
    figure.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/img20.svg', style="width:950px;").m-auto
    p Además de la relación simple de comunicación que se muestra con anterioridad, existen más relaciones en los casos de uso que especifican más detalladamente las acciones entre estos y que se mencionan a continuación.
    separador.mb-5
    #t_2_3
    .titulo-segundo.color-secundario
      h2 2.3 Relaciones de casos de Uso
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0
        p En el proceso de desarrollo pueden definirse diferentes casos de uso y por lo que estos no son independientes, ya que se pueden establecer relaciones que dependan uno del otro entre los casos de uso.
        p Las principales relaciones consideradas por UML son:
        .row.mb-4
          .col-12.bg-color15
            .row.justify-content-evenly
              .col-auto
                p Extensión (#[i extend])
              .col-auto
                p Generalización (#[i generalization])
              .col-auto
                p Inclusión (#[i include])
        p.mb-0 Los tres tipos de relaciones que son soportados por el estándar UML se encuentran explicados en la siguiente tabla, por lo que se invita a revisar el contenido:
      .col-lg-6
        figure.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/img13.png', style="width:450px;").m-auto
    .titulo-sexto.color-acento-contenido
      p.mb-0 Tabla 1 Relaciones de casos de Uso
    .tabla-a.color-acento-botones.mb-5 
      table
        thead
          tr
            th Relación
            th Descripción
            th Notación
        tbody
          tr
            td Inclusión (#[i include] o #[i use])
            td Se usa para extraer comportamientos comunes un caso de uso, puede incluir otro.
            td
              figure
                img(src='@/assets/curso/img14.png', style="width:150px;").m-auto
          tr
            td Extensión (#[i Extend])
            td Se utiliza para extender a otro caso de uso, es útil para nuevos requerimientos del sistema.
            td
              figure
                img(src='@/assets/curso/img15.png', style="width:150px;").m-auto
          tr
            td Generalización
            td Relación entre un caso de uso general y uno específico que hereda propiedades del caso de uso base.
            td
              figure
                img(src='@/assets/curso/img16.png', style="width:150px;").m-auto
    p.mb-5 Tomando el ejemplo anterior Ejemplo 1, y con el propósito de perfeccionar el diagrama de casos de uso se pueden agregar unos nuevos casos de uso donde se visualicen las relaciones mencionadas anteriormente, la primera de ellas es la relación #[i extends]:
    .row.mb-5
      .col-12.p-5.bg-color16(data-aos="fade-right")
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 #[span #[i << extends >>]]
            p.mb-0 Se define esta relación cuando se cuenta con un caso de uso que es muy parecido a otro, pero que sin embargo realiza mucho más. Por ejemplo, en el caso anterior se puede ampliar el caso de uso envía factura por envía factura por correo electrónico. Ambos casos establecen la misma acción, la diferencia es que el caso de uso además de enviar la factura al sistema externo, también envía un correo electrónico con la factura y se representaría de la siguiente manera:
          .col-lg-6
            figure
              img(src='@/assets/curso/img21.svg', style="width:550px;").m-auto
    p La relación se lee de la siguiente manera: el caso de uso enviar factura por correo extiende del caso de uso enviar factura.
    p.mb-5 Otro factor importante que se debe tener en cuenta es el siguiente:
    .row.mb-5
      .col-12.p-5.bg-color16(data-aos="fade-left")
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 #[span #[i << uses o include >>]]
            p.mb-0 Este define la relación cuando una parte del comportamiento o acción es equivalente en más de un caso de uso y no se requiere duplicar la representación de su actuación. Por otro lado, para el Ejemplo 1, en el caso anterior se amplía con el siguiente requerimiento funcional: antes de que el usuario envié la factura puede realizar una búsqueda de facturas para seleccionarla y enviarla haciendo necesario incluir la relación #[i << include >>]. Por lo que se vería así:
          .col-lg-6
            figure
              img(src='@/assets/curso/img22.svg', style="width:550px;").m-auto
    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/img23.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Casos de Uso II - 5 - Tutorial UML
                  p.text-small.text-white Para profundizar en relaciones de caso de uso puede visitar el enlace que se encuentra en la sección de material complementario con el siguiente nombre: diagrama de Casos de Uso II - 5 - Tutorial UML en español.
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=DUjBnEvIm1M&list=PLM-p96nOrGcaw5dhv8wOA5tVVWEmXtA2F&index=5" target="_blank")
                    span(style="color: #000000 !important") Ver
                    i.fas.fa-link(style="color: #000000 !important ")
    separador.mb-5
    #t_2_4
    .titulo-segundo.color-secundario
      h2 2.4 Especificación de casos de uso
    .row.mb-5.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        p Cuando se habla de especificación de casos de uso se hace referencia al proceso de descripción textual de cada uno de estos detallando los flujos y eventos que interactúan con el sistema y los actores que participan en él. Usualmente el analista, que es la persona encargada del diseño de los casos de uso a medida es quien va identificando los requerimientos y los va documentando.
        p En adición la especificación de Casos de Uso busca:
        ul.lista-ul.ms-3
          li
            i.fab.fa-buffer(style="color:#039BE5;")
            | Realizar la descripción de la interacción de un actor con el sistema.
          li
            i.fab.fa-buffer(style="color:#039BE5;")
            | Narrar el rol desempeñado por los actores en la interacción con el sistema y sus flujos.
          li
            i.fab.fa-buffer(style="color:#039BE5;")
            | Describir los casos de uso.
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img17.png', style="width:550px;").m-auto
    p.mb-5  A continuación, se describe una plantilla donde se indican las partes y las indicaciones básicas para la documentación de casos de uso.
    .titulo-sexto.color-acento-contenido
      p.mb-0 Tabla 2 Plantilla de Casos de Uso
    .tabla-a.color-acento-botones.mb-5 
      table(style="width: auto;")
        caption Nota. https://bit.ly/3k66Sf3
        thead
          tr
            th(colspan="2") DESCRIPCIÓN DE UNA ESPECIFICACIÓN DE CASO DE USO
        tbody
          tr
            th Nombre del caso de uso
            td Indica el nombre del caso de uso. Normalmente, el nombre expresa el resultado objetivo y observable del caso de uso, como por ejemplo "Imprimir factura" en el caso de un de un sistema de ventas.
          tr
            th Autor
            td Persona que diseña el caso de uso.
          tr
            th Fecha
            td Aquí se diligencia la fecha en la que se realizó el caso de uso.
          tr
            th Descripción
            td Se realiza una corta descripción del caso de uso.
          tr
            th Actores
            td Describe los nombres del actor o actores del caso de uso.
          tr
            th Precondiciones
            td Son aquellas condiciones que deben existir para que se cumpla el caso de uso.
          tr
            th Flujo Normal
            td Son los pasos normales de ejecución del caso de uso.
          tr
            th Flujo Alternativo
            td Flujos alternativos de ejecución de casos de uso.
          tr
            th PosCondiciones
            td Son aquellas condiciones que se cumplen cuando finaliza un caso de uso.
    p.mb-5 A continuación, se muestra un ejemplo de especificación de casos de uso para el caso de uso “Crear Foro” utilizando la plantilla propuesta posteriormente.
    .row.justify-content-center
      .col-auto
        .titulo-sexto.color-acento-contenido
          p.mb-0 Tabla 3 Ejemplo especificación de caso de uso foro
        .tabla-a.color-acento-botones
          table(style="width: auto;")
            thead
              tr
                th(colspan="2") DESCRIPCIÓN DE UNA ESPECIFICACIÓN DE CASO DE USO
            tbody
              tr
                th Nombre del caso de uso
                td Crear foro
              tr
                th Autor
                td Mario Vera Cruz
              tr
                th Fecha
                td 20/09/2021
              tr
                th Descripción
                td Crea un nuevo mensaje.
              tr
                th Actores
                td Alumno/Docente
              tr
                th Precondiciones
                td Al iniciar el usuario debe estar autenticado en el sistema.
              tr
                th Flujo Normal
                td
                  ol.lista-ol
                    li 
                      span.text-bold 1. 
                      | El actor da clic en la opción nuevo mensaje.
                    li 
                      span.text-bold 2. 
                      | Se muestra un área de texto para escribir el mensaje.
                    li 
                      span.text-bold 3. 
                      | El actor introduce el mensaje.
                    li 
                      span.text-bold 4. 
                      | El sistema verifica datos y los almacena.
                    li 
                      span.text-bold 5. 
                      | El profesor acepta y publica.
              tr
                th Flujo Alternativo
                td
                  ol.lista-ol
                    li 
                      span.text-bold 4a. 
                      | Se hace una comprobación de los datos si no son correctos muestra mensaje de corrección.
                    li 
                      span.text-bold 4b. 
                      | El profesor rechaza el mensaje de modo que no es publicado sino devuelto.
              tr
                th PosCondiciones
                td Se publica y almacena el mensaje satisfactoriamente.
    separador.mb-5
    #t_2_5
    .titulo-segundo.color-secundario
      h2 2.5 Casos de uso reales (prototipos)
    .row.py-5.px-5.mb-5.bg-color1
      .col-12
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src='@/assets/curso/img24.svg', style="width:550px;").m-auto
          .col-lg-8
            p Su objetivo principal es detallar el proceso de un sistema de información que se describe por medio de un caso de uso incluyendo la interacción de objetos, así como definir las transacciones de las interfaces y clases de los diferentes procedimientos secundarios de diseño. De este modo, cuando se reconozcan las clases que participan internamente de un caso de uso, es fundamental que los entornos que se recolectan del análisis se completen, incorporando las correspondientes clases de diseño sin dejar a un lado las restricciones del ambiente tecnológico.
            p Los casos de uso reales representan el diseño preciso del caso de uso desde una tecnología específica. Así pues, si se trata de un diseño gráfico para el usuario, se incluirá el diseño de ventanas de este y una descripción de la interacción con los objetos de la interfaz. En resumen, los casos de uso reales brindan diseños de pantalla y explicación de la interacción entre los objetos de esta.
            .cajon.color-secundario.p-4
              p.mb-0 Para aclarar las definiciones anteriores se emplea un ejemplo de un sistema de Ventas que encontrará posteriormente, donde se realiza el diseño del caso de uso real y se hace la descripción de interacción entre los artefactos del diseño, A continuación, se presenta una tabla con los datos de un ejemplo para un Sistema de Venta:
    .row.py-5.px-5.bg-color17
      .col-12
        .row.mb-5.justify-content-center
          .col-auto
            .titulo-sexto.color-acento-contenido
              p.mb-0 Tabla 4 Sistema de ventas
            .tabla-a.color-acento-botones
              table(style="width: auto;")
                tbody
                  tr
                    th(style="border-top: 5px #FFA726 solid;") Caso de uso adquirir productos
                    td(style="border-top: 5px #FFA726 solid;") Adquirir productos
                  tr
                    th Actores
                    td Cliente (quien inicia el proceso), Cajero.
                  tr
                    th Tipo
                    td Primario, real.
                  tr
                    th Descripción
                    td
                      p En el almacén de ropa el cliente se dirige a la caja registradora con los productos a comprar. 
                      p El empleado- cajero hace el registro de los productos que el cliente compra y recibe el dinero en efectivo.
                      p.mb-0 Al finalizar el proceso, el cliente se retira con los artículos comprados.
        p.mb-5 Para profundizar su aprendizaje le invito a ver el tema: Diseño del caso de uso a continuación:
        figure.mb-5(data-aos="fade-up")
          img(src='@/assets/curso/img25.svg', style="width:1250px;").m-auto
          figcaption Nota. https://docer.com.ar/doc/8nn115
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p A continuación, se hace la descripción de las interacciones entre objetos en el diseño:
            ul.lista-ul.ms-3.mb-4
              li
                i.fab.fa-buffer(style="color:#039BE5;")
                | El inicio de este caso de uso se da cuando el cliente se acerca a la caja registradora con los artículos que desea llevar.
              li
                i.fab.fa-buffer(style="color:#039BE5;")
                |
                p.mb-0 Para cada producto el cajero debe ingresar el #[b código del producto] en #[b A] de la #[b ventana-1], si el usuario tiene más de un producto es opcional registrar la cantidad en #[b E], una vez finalice el registro de todos los productos se presiona #[b H].
              li
                i.fab.fa-buffer(style="color:#039BE5;")
                |
                p.mb-0 El sistema almacena los productos registrados. La visualización de la descripción y el precio del producto se muestra en #[b B] y en #[b F] de la #[b Ventana-1].
              li
                i.fab.fa-buffer(style="color:#039BE5;")
                |
                p.mb-0 Para finalizar el cajero presiona el botón #[b I] para dar por finalizada la venta.
              li
                i.fab.fa-buffer(style="color:#039BE5;")
                |
                p.mb-0 Luego el sistema hace el cálculo y muestra en #[b C] el total de la venta.
            .cajon.color-secundario.p-4
              p.mb-0 Como se mencionó anteriormente, otra de las técnicas muy utilizadas para descripción de funcionalidades desde la visión del usuario son las historias de usuario las cuales se detallan a continuación.
          .col-lg-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img26.svg', style="width:450px;").m-auto
    
</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
