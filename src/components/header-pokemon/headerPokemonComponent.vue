<template>
      <!-- Header Pokemon -->
      <section class="header-pokemon-detalle">
          <div class="header-pokemon-trazado">
              <router-link to="/">
                <picture class="">
                    <source srcset="../../assets/img/webp/Trazado_308.webp" type="image/webp" >
                    <img loading="lazy" src="../../assets/img/normal/trazado/Trazado 308.png" alt= " Imagen  ">
                </picture>
              </router-link>
          </div>

          <div class="header-pokemon-logout">
              <picture v-clipboard:copy="this.informacion" >
                    <source srcset="../../assets/img/webp/logout/Logout@2x.webp" type="image/webp" >
                    <img loading="lazy" src="../../assets/img/normal/logout/Logout@2x.png" alt= " Imagen  ">
                </picture>
          </div>
      </section>
      
</template>
<script>

export default {
  name: 'HeaderPokemonComponent',
  props: [
      'pokemon'
  ],
  mounted(){
     this.inicio();
  },
  data(){
      return{
          informacion: ''
      }
  }, 
  methods:{
      async inicio(){
          await setTimeout(()=>{
            this.informacion ='Pokemon: '+ this['pokemon'].toString()
          },500).then(this.informacion ='Pokemon: '+ this['pokemon'].toString());
    
      }
  }
}
</script>
<style scoped>
    @import './headerPokemonComponent.css';
</style>
