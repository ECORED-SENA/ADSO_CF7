<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span S
      h1 Sintesis
    p Con el diagrama de actividades se termina la descripción de las tres técnicas usadas para la especificación y el análisis de requisitos, como se pudo analizar cada una de las técnicas nos brinda características para lograr representar gráficamente y de una forma clara, los requisitos que un usuario necesita poder cumplir satisfactoriamente con las solicitudes de los clientes y usuarios, por otro lado se pueden usar todas las técnicas en una especificación y análisis de requisitos si se ve la necesidad.
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.
    figure(data-aos="fade-up")
      img(src='@/assets/curso/img49.svg', style="width:1100px;").m-auto

</template>

<script>
export default {
  name: 'Tema5',
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
