<template>
<div id="app">
  <main class="contenedor">
    <router-view></router-view>
  </main>
</div>
  
</template>

<script>
import '../public/assets/js/modernizr';

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
  /* Tipografias */
  @import url('http://fonts.cdnfonts.com/css/museo-sans-rounded');
  @import url('http://fonts.cdnfonts.com/css/lato');
  /* Archivo con configuraciones globales e iniciales */ 
  @import '../public/assets/css/normalize.css';
  @import './style.css';
</style>
