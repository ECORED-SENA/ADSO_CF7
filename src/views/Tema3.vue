<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Historias de usuario
    .row.py-5.px-5.mb-5.bg-color1
      .col-12
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p Las historias de Usuario son una forma sencilla de representar los requisitos de un sistema de información, son creadas en una o dos oraciones y sobre todo escritas en un lenguaje muy común y legible para el usuario. Son llamadas #[i User Stories], convirtiéndose en un estándar muy utilizado en el momento de la definición de requisitos. Estas surgen en XP (1999) y se exaltan concluyentemente con Mike Cohn (en “User Stories Applied: For Agile Software Development”, 2004) que establece el patrón para definirlas, siendo su simplicidad la razón de su popularidad, las cuales se muestran a continuación.
            figure(data-aos="fade-right")
              img(src='@/assets/curso/img28.svg', style="width:550px;").m-auto
          .col-lg-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img29.svg', style="width:450px;").m-auto
    p.mb-5 Como se muestra en la figura anterior las historias de usuario están compuestos de 3 elementos que se describen a continuación.
    #t_3_1
    .titulo-segundo.color-secundario
      h2 3.1 Elementos de una historia de Usuario
    p.mb-5 Una historia de usuario está compuesta por tres elementos los cuales son esenciales en el proceso:
    .row.py-5.px-5.mb-5.bg-color1
      .col-12
        figure(data-aos="fade-down")
          img(src='@/assets/curso/img30.svg', style="width:450px;").m-auto
    p.mb-5 A continuación, se hace la descripción de los elementos de una historia de usuario según Cohn, M. (2018):
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Tarjeta (Card)")
        .col-12
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p Es una frase que sintetiza una necesidad dada en una conversación entre el usuario y el dueño del producto, escrita en una tarjeta, es comúnmente usada en el formato rol-objetivo- beneficio, como se muestra anteriormente, lo más importante es que son escritas teniendo en cuenta la visión el usuario.
              p Su estructura es:
              .row.justify-content-center
                .col-10
                  .cajon.color-secundario.p-4.mb-4
                    p #[b Como] [tipo de usuario] -> quién
                    p #[b Quiero] [necesidad] -> qué
                    p.mb-0 #[b Para] [beneficio esperado] -> para qué
            .col-lg-6
              p Para ver como se mostraría esta información en la tarjeta se tiene el siguiente requerimiento:
              figure
                img(src='@/assets/curso/img18.png', style="width:450px;").m-auto
          hr
          .row.justify-content-center
            .col-10.p-4.bg-color12
              .row.align-items-center
                .col-2
                  figure
                    img(src='@/assets/curso/img31.svg', style="width:100px;").m-auto
                .col-10
                  p.text-white Como se puede observar en el ejemplo con esta simple estructura compuesta por tres líneas:
                  ul.lista-ul.ms-3
                    li
                      i.fab.fa-buffer(style="color:#FFA726;")
                      |
                      p.mb-0.text-white Se sabe quién? (permite identificar los roles de valor).
                    li
                      i.fab.fa-buffer(style="color:#FFA726;")
                      |
                      p.mb-0.text-white El qué? (permite identificar el problema que se resuelve) y.
                    li
                      i.fab.fa-buffer(style="color:#FFA726;")
                      |
                      p.mb-0.text-white Para qué? (lo que se espera lograr con la construcción de la historia de usuario).
      div(titulo="Conversación")
        .row
          .col-12
            .row.align-items-center
              .col-lg-6.mb-4.mb-lg-0
                p Es el proceso en el que se comunica las personas que requieren las necesidades (dueño del producto) con las personas que saben cómo solucionarlas (desarrolladores) esto se hace de la siguiente forma:
                .row.justify-content-center
                  .col-10
                    .cajon.color-secundario.p-4.mb-4
                      p.mb-0 #[b Por medio de preguntas]
                      p.mb-0 #[b Utilizando recursos como: gráficas, prototipos etc.]
                p Lo anterior busca tener claridad y concretar el contenido de las historias de usuario.
              .col-lg-6
                figure
                  img(src='@/assets/curso/img19.png', style="width:450px;").m-auto
            hr
            .row.justify-content-center
              .col-10
                p Siguiendo con el ejemplo de “Compra una boleta de cine”: se realizarán las siguientes preguntas:
              .col-10.p-4.bg-color12
                .row.align-items-center
                  .col-2
                    figure
                      img(src='@/assets/curso/img31.svg', style="width:100px;").m-auto
                  .col-10
                    ul.lista-ul.mb-4
                      li
                        i.fab.fa-buffer(style="color:#FFA726;")
                        |
                        p.mb-0.text-white ¿Existe un máximo de boletas para la venta?
                      li
                        i.fab.fa-buffer(style="color:#FFA726;")
                        |
                        p.mb-0.text-white Si, solo 3 por cada usuario cuando estén en promoción.
                      li
                        i.fab.fa-buffer(style="color:#FFA726;")
                        |
                        p.mb-0.text-white ¿Qué medios existen para realizar el pago de las boletas?
                      li
                        i.fab.fa-buffer(style="color:#FFA726;")
                        |
                        p.mb-0.text-white Efectivo y Tarjeta.
                    p.text-white #[b Como se mencionó anteriormente la conversación se hace con el fin de entender el problema que se quiere resolver.]
      div(titulo="Confirmación")
        .row
          .col-12
            .row.align-items-start
              .col-lg-6.mb-4.mb-lg-0
                p Es la verificación del acuerdo con relación a lo que se quiere construir, permite validar si se terminó o no, o si se cumplió con lo esperado. Esta confirmación recibe el nombre de criterios de aceptación. Las funciones que cumplen los criterios de aceptación es tener claro el contexto donde se efectúa la historia de usuario y conocer fácilmente, si una historia realmente está terminada.
                p Continuando con el ejemplo “Compra una boleta de cine” los criterios de aceptación que se pueden establecer son:
                .row
                  .col-12.p-4.bg-color18
                    p.mb-0.ms-3 #[b Criterios Aceptación]
                  .col-12.p-4.bg-color19
                    ul.lista-ul.ms-3
                      li
                        i.fab.fa-buffer(style="color:#039BE5;")
                        |
                        p.mb-0 Cuando se termine la boleta se debe mostrar un mensaje informando que ya no hay disponibilidad para la venta.
                      li
                        i.fab.fa-buffer(style="color:#039BE5;")
                        |
                        p.mb-0 El sistema debe validar la edad para la venta de la boleta según clasificación de la película.
                      li
                        i.fab.fa-buffer(style="color:#039BE5;")
                        |
                        p.mb-0 El sistema debe mostrar el valor de devolución después del pago en efectivo, en el caso de que sobre si no mostrar cero.
              .col-lg-6
                figure
                  img(src='@/assets/curso/img20.png', style="width:450px;").m-auto
    p.mb-5 Cuando se realizan historias de usuario es muy importante cumplir con las siguientes reglas:
    .row.mb-5.align-items-end
      .col-lg-6.mb-4.mb-lg-0
        figure.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/img32.svg', style="width:450px;").m-auto
        .cajon.color-secundario.p-4.mb-4
          p.mb-0  Así como son necesarias estas reglas, también es fundamental una buena redacción de las historias de usuario, por esto se presenta a continuación un método que facilita afianzar la calidad en la escritura de una historia de usuario: el método #[i “Invest”].
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img33.svg', style="width:450px;").m-auto
    .row.mb-5.justify-content-center
      .col-10
        .row.align-items-center.justify-content-center.bg-color20(data-aos="fade-left")
          .col-lg-11
            figure.mb-5
              img(src='@/assets/curso/img2.svg').img-position1
            p.text-white Una buena guía para redactar Historias de Usuario con calidad es seguir el acrónimo #[i INVEST], como se muestra a continuación:
            .row.mb-5
              .col-12.d-inline-flex.justify-content-end.align-items-center
                p.mb-0.text-white #[b Bill Wake 2003.]
                .cuadro
    .row.py-5.px-5.mb-2.bg-color17
      .col-12
        .titulo-sexto.color-acento-contenido
          p.mb-0 Método #[i Invest]
        .row.mb-5(data-aos="fade-up")
          .col-lg-6.d-flex
            figure
              img(src='@/assets/curso/img34.svg', style="width:150px;").m-auto
            figure
              img(src='@/assets/curso/img35.svg', style="width:150px;").m-auto
            figure
              img(src='@/assets/curso/img36.svg', style="width:150px;").m-auto
          .col-lg-6.d-flex
            figure
              img(src='@/assets/curso/img37.svg', style="width:150px;").m-auto
            figure
              img(src='@/assets/curso/img38.svg', style="width:150px;").m-auto
            figure
              img(src='@/assets/curso/img39.svg', style="width:150px;").m-auto
        p.mb-5 Para profundizar en el tema se hace la descripción del método #[i Invest], por lo que se le invita a revisar el siguiente recurso de aprendizaje:
        h3 Método #[i Invest]
        p.mb-5 A continuación se hace una descripción de cada uno de los elementos que intervienen en este método.
        .row.mb-5.align-items-start
          .col-lg-6.mb-4.mb-lg-0
            LineaTiempoD.color-primario
              .row(numero="1" titulo="Independiente")
                .col-12
                  p Las historias de usuario deben ser lo más independientes posible.
              .row(numero="2" titulo="Negociable")
                .col-12
                  p Las historias de usuario deben ser negociables siempre en acuerdo con el cliente.
              .row(numero="3" titulo="Valiosa")
                .col-12
                  p Es fundamental que la historia de usuario sea valiosa para el cliente por esta razón es importarte que el cliente escriba el mismo la historia.
              .row(numero="4" titulo="Estimable")
                .col-12
                  p La estimación de la historia de usuario debe ser precisa para ayudar al cliente. La realización está a cargo del equipo de trabajo y se relaciona con el tamaño de la misma.
              .row(numero="5" titulo="<i>Small</i> (pequeña)")
                .col-12
                  p Es fundamental el tamaño de la historia de usuario para disminuir y facilitar la estimación de la misma, es ideal definirla en semanas cortas o días.
              .row(numero="6" titulo="Testeable (comprobable)")
                .col-12
                  p La historia de usuario debe ser probada para darla por terminada.
          .col-lg-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img40.svg', style="width:450px;").m-auto
        .row.justify-content-center
          .col-10
            .cajon.color-secundario.p-4
              p.mb-0 Utilizando este método se logra asegurar que una historia de usuario no sea dependiente de otra y así poder proporcionar que su planificación y desarrollo no incluya muchos datos técnicos que restrinjan los convenios entre los clientes y los desarrolladores.
    separador.mb-5
    #t_3_2
    .titulo-segundo.color-secundario
      h2 3.2 Ejemplos
    p.mb-5 A continuación, se muestran algunos ejemplos prácticos de historias de usuario aplicando el método #[i invest]:
    .titulo-quinto.color-acento-contenido
      h4 Historia de usuario: “Crear Usuario”
    .row.mb-5.justify-content-center
      .col-9.col-lg-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/img21.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.mb-0 #[b Como]: cliente de un supermercado
              p.mb-0 #[b Quiero]: hacer compras por medio de una aplicación #[i web]
              p #[b Para]: no moverme de casa.
              p Como se muestra en la primera opción de historia de usuario, se identifica el que quiere hacer, pero no el cómo lo va a realizar, no hay ningún detalle del ingreso a las compras en línea que seguramente se aclara en una siguiente reunión.
              p Esta historia de usuario cumple con las características del método #[i invest] por lo que es sencilla, clara y satisface una necesidad, es específica lo cual lleva a tener una fácil estimación definiendo el tiempo de desarrollo.
      .col-9.col-lg-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/img22.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.mb-0 #[b Como]: cliente de un supermercado
              p.mb-0 #[b Quiero]: acceder al registro por medio de un formulario que me permita escribir mi correo electrónico y asignar una contraseña.
              p #[b Para]: tener seguridad
              p Si se observa esta historia de usuario se puede notar que hay demasiadas especificaciones en la estructura quiero, además que no hay claridad en el beneficio.
              p Un ejemplo más de historias de usuario que no cumplen con las cualidades de independiente, estimable y pequeña es el siguiente: 
              p #[b Historia de usuario: “Crear aplicación web”]
              p #[b Como]: cliente de un supermercado
              p #[b Quiero]: ingresar a una página #[i web]
              p #[b Para]:  hacer compras en línea.
    .row.mb-5.justify-content-center
      .col-10
        p.mb-5 Esta historia no es independiente ya que describe una historia de usuario muy grande la cual es denominada como Épicas, ya que de ella pueden salir muchas historias de usuario como:
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img43.svg', style="width:650px;").m-auto
    .row.mb-5.justify-content-center
      .col-lg-10(data-aos="fade-up")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/img23.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Plantillas-Historias
                  p.text-small.text-white Para visualizar una historia del usuario Épica se le invita a ver el siguiente recurso de aprendizaje denominado: ¨Plantillas-Historias¨
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo2.xlsx')" target="_blank")
                    span(style="color: #000000 !important") Ver
                    i.fas.fa-link(style="color: #000000 !important ")
    .row.mb-5.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        p Por lo anterior, no se cumpliría tampoco con la característica de estimación porque no se sabría cuándo se terminaría la historia. Como se puede notar en la descripción de los anteriores ejemplos el método #[i Invest] nos ofrece reglas para que la redacción de las historias de usuario sea óptimas y así lograr cumplir al cliente con lo que realmente necesita.
        p Para realizar una buena gestión de proyectos, usualmente en las metodologías ágiles se usan una serie de herramientas para crear las historias de usuario como:
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img24.png', style="width:500px;").m-auto
      .col-lg-6.mb-4.mb-lg-0
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img23.png', style="width:650px;").m-auto
    p A continuación, se muestra un ejemplo de uso de una plantilla que mantiene la misma estructura sencilla de las historias de Usuario.
    separador.mb-5
    #t_3_3
    .titulo-segundo.color-secundario
      h2 3.3 Plantillas de historias de usuario
    .row.mb-5.align-items-center(data-aos="fade-right")
      .col-lg-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/img25.png', style="width:750px;").m-auto
      .col-lg-6.bg-color21
        p.mb-0 Las plantillas de historias de usuario pueden ser adaptadas según las necesidades requeridas sin perder la flexibilidad y sencillez que ofrece una HU, los equipos de desarrollo trabajan conjuntamente utilizando herramientas en línea para compartir y trabajar en las plantillas. A continuación, se puede visualizar un ejemplo del uso de una plantilla de Excel descargada de la #[i web] con un ejemplo de gestión de productos.
    .titulo-sexto.color-acento-contenido
      p.mb-0 Ejemplo plantilla historia de usuario
    .tabla-a.color-acento-botones.mb-5 
      table(style="width: auto;")
        caption Nota. https://bit.ly/3CJqa13
        thead
          tr
            th ID de la historia
            th Rol
            th Funcionalidad
            th Razón/Resultado
            th Criterio de aceptación
        tbody
          tr
            td Id.01
            td Como cliente
            td Quiero ver una lista de categorías de productos.
            td Para poder realizar búsquedas de productos por categorías.
            td Despliegue de listado de categorías a seleccionar con productos asociados.
          tr
            td Id.02
            td Como cliente
            td Quiero ver una lista de precios.
            td Para poder elegir el producto más barato.
            td Despliegue una lista ordenada de productos por precio de menor a mayor.
    figure
      img(src='@/assets/curso/img26.png', style="width:1150px;").m-auto
    .row.justify-content-center(data-aos="fade-down")
      .col-10.p-4.bg-color22
        p.mb-0 Ya se han descrito dos de las tres técnicas más utilizadas para la descripción de requerimientos que son los casos de uso y las historias de usuario, a continuación, se hace la descripción de la tercera técnica:  los diagramas de actividades.

</template>

<script>
export default {
  name: 'Tema3',
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
