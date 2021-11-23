<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Características lenguaje Unificado de Modelado UML
    p.mb-5 Con el nacimiento de la Programación Orientada a Objetos (POO) se establecieron una variedad de lenguajes, métodos, simbologías usadas para detallar el desarrollo de los diferentes sistemas. Indudablemente esta situación generó un desconcierto en los programadores de software; tratando de darle solución a este inconveniente aparece el Lenguaje de Modelado Unificado (Unified Modeling Language –UML).
    figure
      img(src='@/assets/curso/img1.png', style="width:auto;")
    .row.px-5.bg-color1.mb-5
      .col-12
        .row.justify-content-center
          .col-10
            .cajon.color-primario.p-4(data-aos="fade-up")
              p.mb-0 El lenguaje de Modelado Unificado UML proporciona un grupo de herramientas que facilitan realizar el modelado (análisis y diseño) de los sistemas que son orientados a objetos. Indicando una serie de normas técnicas que representan de manera gráfica el camino y la estructura de un sistema determinado a los programadores, analistas, desarrolladores, diseñadores etc.
        figure
          img(src='@/assets/curso/img1.svg', style="width:700px;").m-auto
        .row.justify-content-center
          .col-10
            .row.align-items-center.justify-content-center.bg-color2(data-aos="fade-left")
              .col-lg-11
                figure.mb-5
                  img(src='@/assets/curso/img2.svg').img-position1
                p.text-white “El UML (Lenguaje Unificado de Modelado) es una de las herramientas más emocionantes en el mundo actual del desarrollo de sistemas. Esto se debe a que permite a los creadores de sistemas generar diseños que capturen sus ideas en una forma convencional y fácil de comprender para comunicarlas a otras personas”
                .row.mb-5
                  .col-12.d-inline-flex.justify-content-end.align-items-center
                    p.mb-0.text-white #[b (Arnold y Rodríguez, 1990).]
                    .cuadro
    #t_1_1.pt-5
    .titulo-segundo.color-secundario
      h2 1.1 Evolución del Lenguaje Unificado de Modelado UML
    .bloque-texto-b.color-secundario.p-4.mb-5
      .bloque-texto-b__texto.mb-4
        i.fas.fa-quote-left
        p.mb-0 El UML tiene su inicio a finales de los años 80, Inicialmente basado en el método Booch, desarrollado por el diseñador de Software Grady Booch, en el año de 1994 el científico de la computación James Rumbaugh le implementó el modelado de objetos, en 1995 se adicionaron a estas otros principios y otras metodologías, unas de estás adicionadas por Ivar Jacobson.
        i.fas.fa-quote-right
      .bloque-texto-d__autor
        .row
          .col-12.d-inline-flex.justify-content-end.align-items-center
            p.mb-0 #[b Booch (2006)]
            .cuadro
    .row.px-5.bg-color3.mb-5
      .col-12.p-4.my-5
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p.mb-0 La primera versión oficial UML 1. Se lanzó en el año de 1997 con la unión y liderato de Booch, Rumbaugh y Jacobson, la cual ofrece una metodología que contiene varios estándares, #[span.text-deco1 donde su principal objetivo es que todos los diagramas tengan coherencia]. En el año 2005 se divulgó la versión de UML 2.0 cuyo contenido estaba orientado principalmente a la visión Orientada a Objetos, de ahí en adelante se realizan nuevas versiones basadas en UML 2.0.
          .col-lg-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img2.png', style="width:450px;").m-auto
    p.mb-5 A continuación, se muestra un recurso de aprendizaje con la evolución mencionada.
    h2.mb-5 Evolución UML
    p.mb-5 Esta línea de tiempo representa la aparición y el proceso evolutivo UML a través de los años con sus respectivos investigadores.
    .row.mb-5.justify-content-around(data-aos="fade-right")
      .col-4.col-lg-3.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img4.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              p.text-center #[b Grady Booch], ingeniero de sistema e investigador, antes del 95.
      .col-4.col-lg-3.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img5.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              p.text-center #[b Jim Rumbaugh] (OMT), antes del 95.
              br
      .col-4.col-lg-3.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img6.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              p #[b Ivar Jacobson], UML 0.8 y 0.91 1996
              br
    .row.px-5.bg-color4.mb-2
      .col-12.p-4
        #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
          .carousel-inner
            .carousel-item.active
              figure
                img(src='@/assets/curso/img8.svg', alt='Texto que describa la imagen')
            .carousel-item
              figure
                img(src='@/assets/curso/img9.svg', alt='Texto que describa la imagen')
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next

    p Fuente: https://cdn.visual-paradigm.com/guide/what-is-uml/01-uml-history.png
    separador.mb-5
    #t_1_2
    .titulo-segundo.color-secundario
      h2 1.2 Características generales del Lenguaje Unificado de Modelado (UML)
    .row.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6
        figure
          img(src='@/assets/curso/img3.png', style="width:650px;").m-auto
      .col-lg-6
        .row
          .col-12.bg-color5.p-4
              p.mb-0 Como se mencionó anteriormente UML es un lenguaje capaz de brindar unas reglas que facilitan la comunicación de un sistema por medio de representaciones gráficas de este, indicando como hacer la creación y la lectura de los modelos. Aunque hay una gran variedad de características del UML según ( Booch, 2006) se pueden resumir en las que se nombran a continuación, por lo que le invito a revisar el siguiente recurso de aprendizaje:
    .row.px-5.bg-color6
      .col-12
        h2.mb-5 Lenguaje Unificado de Modelado (UML)
        figure.mb-5(data-aos="fade-right")
          img(src='@/assets/curso/img5.svg', style="width:1100px;").m-auto
        p.mb-5 En la siguiente figura se muestran las características básicas del UML, las cuales se mencionaron anteriormente.
        .row.justify-content-center
          .col-lg-7
            .titulo-sexto.color-acento-contenido
              p.mb-0 Características del UML
            figure.mb-5(data-aos="fade-left")
              img(src='@/assets/curso/img6.svg', style="width:700px;").m-auto
          .col-lg-7.pt-5
            .cajon.color-primario.p-4
              p.mb-0 Las características del UML se aplican en las fases de Desarrollo de Software, la primera fase es la de análisis y especificación de requisitos que se detalla a continuación.

</template>

<script>
export default {
  name: 'Tema1',
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
