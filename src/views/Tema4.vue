<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Diagrama de actividades
    .row.mb-5.align-items-start
      .col-lg-6.mb-4.mb-lg-0
        p Estos son diagramas de comportamiento que se utilizan para representar una sucesión de actividades, explican el flujo de operaciones desde el punto en que inician hasta el punto final definiendo una variedad de caminos de decisiones en el desarrollo de eventos que abarca una actividad. (Booch, G. (1994). Ellos permiten visualizar un caso de uso específico a un nivel más preciso, ilustrando el flujo de actividades definidas en un sistema.
        p A continuación, podrá conocer los beneficios del diagrama de actividades.
        p #[b Beneficios:]
        ul.lista-ul.ms-3
          li
            i.fab.fa-buffer(style="color:#039BE5;")
            |
            p.mb-0 Permite explicar la lógica de un algoritmo.
          li
            i.fab.fa-buffer(style="color:#039BE5;")
            |
            p.mb-0 Representa cada uno de los procesos realizados en los diseños de casos de uso en UML.
          li
            i.fab.fa-buffer(style="color:#039BE5;")
            |
            p.mb-0 Permite instruir procesos entre el sistema y los usuarios en un flujo de trabajo o negocios.
          li
            i.fab.fa-buffer(style="color:#039BE5;")
            |
            p.mb-0 Permite dar claridad optimizando y facilitando los casos de uso complejos.
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img27.png', style="width:550px;").m-auto
    #t_4_1
    .titulo-segundo.color-secundario
      h2 4.1 Elementos de un diagrama de actividades
    p.mb-5 Un diagrama de actividades contiene fundamentalmente los siguientes elementos:
    TabsA.color-acento-botones
      .tarjeta.color-acento-botones--borde.p-4(titulo="Actividad")
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Actividad
            p Una actividad es la descripción o el detalle de una sucesión de conductas parametrizadas, se simboliza como un flujo de acciones ordenadas. El modelado de este flujo se hace por medio de nodos de actividad que se conectan por medio de flujos de control. Las actividades generan jerarquías de peticiones llamando a diferentes actividades o como último recurso solventando operaciones propias.
            p La representación gráfica de las actividades se hace por medio de un rectángulo que tiene bordes redondeados y dentro del rectángulo especifica el nombre de la actividad.
          .col-lg-6
            figure
              img(src='@/assets/curso/img44.svg', style="width:350px;").m-auto
          .col-12.p-4.mt-4.bg-color14
            p Para nombrar las actividades se usan verbos del modelo de negocio como, por ejemplo:  
            p.mb-0 Buscar Factura
            p.mb-0 Realizar pago y 
            p.mb-0 Renovar lista, etc.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Flujo entre actividades")
        .row.align-items-center
          .col-12
            h4 Flujo entre actividades
            p.mb-5 Este permite realizar los enlaces entre objetos y nodos de una actividad, estos agregan flujos de objetos y flujos de control. Su representación gráfica se hace por medio de una flecha con punta abierta que representa como es el orden en la ejecución de las actividades, muchas veces se adiciona una descripción en la flecha para una mejor comprensión.
            .row.justify-content-center.mb-4
              .col-10
                figure
                  img(src='@/assets/curso/img45.svg', style="width:750px;").m-auto
                  figcaption Nota. https://bit.ly/3nZJwcp
            p.mb-0 Cuando los flujos de actividades utilizan condiciones para su acción se representan mediante un rombo y son llamados nodos de decisión.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Nodo inicial")
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Nodo inicial
            p Como su nombre lo dice el nodo inicial se encarga de empezar un flujo, cuando se llama a una actividad, por cada diagrama existe un solo nodo inicial, el cual se representa con un círculo pequeño.
          .col-lg-6
            figure
              img(src='@/assets/curso/img46.svg', style="width:550px;").m-auto
              figcaption Nota. https://bit.ly/3nZJwcp
      .tarjeta.color-acento-botones--borde.p-4(titulo="Nodo final")
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Nodo final
            p También es un nodo de control final. Su función es detener todos los flujos de una actividad, en una actividad pueden existir más de un nodo final. Este se representa con un círculo sólido con un hueco dentro como se puede observar a continuación:
            p Como parte de su aprendizaje le invito a ver el video denominado: Diagrama de Actividades - 15 - Tutorial UML en español, que se encuentra en la sección de material complementario.
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=GoYdpOVhDRc&list=PLM-p96nOrGcaw5dhv8wOA5tVVWEmXtA2F&index=15" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Enlace web]. Diagrama de Actividades - 15 - Tutorial UML en español.
          .col-lg-6
            figure
              img(src='@/assets/curso/img47.svg', style="width:550px;").m-auto
              figcaption Nota. https://bit.ly/3nZJwcp
          .col-12.mt-4
            p.mb-0 Después de realizada la descripción de los elementos que componen un diagrama de actividades se presenta el siguiente ejemplo de un diagrama de clase sobre un proceso de registro e inicio de sesión.
    .row.py-5.px-5.bg-color17
      .col-12
        separador.mb-5
        #t_4_2
        .titulo-segundo.color-secundario
          h2 4.2 Ejemplo diagrama de actividades
        p.mb-5 A continuación, se realiza un ejemplo de un diagrama de actividades que tiene las funcionalidades de iniciar sesión y registrar en un sistema, por lo que se le invita a revisar el siguiente recurso de aprendizaje.
        h3 Diagrama de actividades
        p.mb-5 Ejemplo de diagramas de actividades
        figure.mb-5(data-aos="fade-up")
          img(src='@/assets/curso/img48.svg', style="width:850px;").m-auto
        .row.mb-5.justify-content-center
          .col-10
            .cajon.color-secundario.p-4(data-aos="fade-right")
              p.mb-0 Como se muestra en el ejemplo anterior, el flujo inicia con la actividad autenticar usuario y pasa por un nodo de decisión que verifica si el usuario existe no o no, si el usuario existe pasa a un nodo de decisión donde valida el usuario y si no es correcto, muestra un mensaje de error, si es correcto da acceso a la aplicación y muestra el menú inicio.
        p.mb-0  En caso de no existir el usuario pasa a la actividad de registrar usuario y después ingresa datos, luego sigue a un nuevo nodo de decisión, donde valida datos y da acceso a la aplicación por lo que sigue el flujo de actividad mostrando la interfaz del menú del sistema y finalmente termina la actividad con un nodo final.

</template>

<script>
export default {
  name: 'Tema4',
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
