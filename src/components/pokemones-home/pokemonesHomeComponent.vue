<template>
    <section class="" v-bind:class="{pokemones: activo, desactivar: activo===false || cargado===false}">

      <div v-for="elemento in pokemones" v-bind:key="elemento['id']">
        <router-link :to="'/pokemon/'+elemento['id']"><PokemonHomeComponent :pokemon="elemento"></PokemonHomeComponent></router-link>
      </div>
       
    </section>
</template>
<script>
import PokemonHomeComponent from '../pokemon-home/pokemonHomeComponent';
import axios from 'axios';

// Modelo de representacion
import Pokemon from '../../models/pokemon';

// URLs
const urlPokedex = 'https://pokeapi.co/api/v2/pokemon-species';
const urlInfo = 'https://pokeapi.co/api/v2/pokemon';

// Numero de pokemones a mostrar en la pantalla de inicio
const numeroPokemonesMostrar = 9;

export default {
  name: 'PokemonesHomeComponent',
  props: [
    /* Valor que define la lista de pokemones esta activa*/
    'activo'
  ],
  mounted(){
    // Cargamos los pokemones despues de montar el componente
    this.getPokemones();
  },
  components: {
    PokemonHomeComponent
  },
   methods: {
     /**
      * Metodo engargado de cargar un numero definido de pokemones 
      * desde el api y guardarlos en el arreglo 'pokemones' con todas
      * sus atributos
      */
      async getPokemones(){
        for(let index = 1; index<(numeroPokemonesMostrar+1); index++){

            let rutaNueva = urlInfo+"/"+index;
            await axios.get(rutaNueva).then(response=>{
              
              // Inicio de la peticion AJAX
              this.id = response['data']['id'];
              this.nombre = response['data']['name'];
              this.imagen = response['data']['sprites']['front_default'];
              this.altura = response['data']['height'];
              this.peso = response['data']['weight'];
              this.habilidad =  response['data']['abilities'][0]['ability']['name']
              this.tipos = new Array(response['data']['types']);
              
              // Fin de la peticion AJAX
            });

            let urlContada = urlPokedex +"/"+index;
            await axios.get(urlContada).then(response=>{
              // Inicio de la peticion AJAX
              this.color = response['data']['color']['name'];
              this.descripcion = response['data']['flavor_text_entries'][34]['flavor_text'];
              this.categoria = response['data']['egg_groups'][1]['name'];

              // Fin de la peticion AJAX
            });

            const tamano = this.tipos[0]['length'];
            for(let i =0; i<tamano; i++){
                const urlTipo = this.tipos[0][i]['type']['url'];

              await axios.get(urlTipo).then((response)=>{
                this.debilidades = new Array(response['data']['damage_relations']['double_damage_from']);
              }); // termina la peticion ajax
              
            }

             let nuevoPokemon = new Pokemon(this.id, this.nombre, this.color, this.imagen, this.descripcion, 
                        this.categoria, this.altura, this.peso, this.habilidad, this.tipos, this.debilidades);
              this.pokemones.push(nuevoPokemon);
            
        }// end_for-principal de 1 a 7
        this.cargado= true;
      }, // end_getPokemones

   },
    data(){
      return {
          id: '',
          nombre: '',
          color: '', 
          imagen: '',
          descripcion: '',
          categoria: '',
          altura: '',
          peso: '',
          habilidad: '',
          tipos: [] ,
          debilidades: [], 

          // Arreglo con todos los pokemones
          pokemones : [], 

          cargado: false
      }
    }
}
</script>
<style scoped>
    @import './pokemonesHomeComponent.css';
</style>
