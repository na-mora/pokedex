# Pokedex
## Ejecucion del proyecto
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Configuración inicial
Este proyecto fue desarrollado utilizando el framework VueJS versión 2 y javascript como lenguaje de programación principal, se instalaron las dependencias 
de 'vue-router' para el manejo de rutas (libreria soportada por vueJS ), 'axios' para hacer llamadas asincronicas al api de pokeapi (liberia minimalista), 'vue2-filter' para aplicar filtros estandares de vueJs en las vistas, 'vue-clicpboard2' para aplicar  directivas relacionadas con el manejo del portapapeles, se enlazaron los archivos de normalize.css para quitar los valores por defecto de los elementos html y modernizr.js para obtener que tecnologias soporta el navegador del usuario final de manera que podamos mejorar la experiencia de usuario   

## Desiciones de arquitectura
Teniendo en cuenta que la aplicación es concebida para que sea escalable a largo plazo, se tomó la decisión de crear dos tipos de componentes Página y Sección, teniendo en cuenta el prototipo en Adobe XD la aplicacion tiene dos paginas Home(HomeComponent) y Pokemon(PokemonComponent). La pagina Home fue dividida en dos secciones encabezado(HeaderHomeComponent) y contenido(PokemonesComponent) el cual a su vez contiene cards de pokemones (PokemonHomeComponent). La pagina de Pokemon tiene 3 secciones navegacion (HeaderPokemonComponent), encabezado (EncabezadoPokemonComponent) y contenido el cual cambia de acurdo al estado de la aplicacion puede estar cargando  (CargandoPokemonComponent), especificaciones (EspecificacionesPokemonComponent) y evolucion (EvolucionPokemonComponent). 
Con el fin de mantener la aplicacion simple se decidio que por cada componente ubiera un archivo .css que contenga sus estilos. 

## Gulp (Herramienta de automatización de procesos)
Pensando en la experiencia de desarrollo en un futuro, se integro gulp a la aplicación como herramenta para automatizar procesos relacionados con el manejo de formatos en los archivos, compilación de archivos internos y externos, etc. En este caso se automatizo el proceso de convertir imagenes de cualquier archivo a .webp el cual es mas ligero sin perder calidad y es soportado en los navegadores modernos con el fin de mejorarlos tiempos de carga.  

## Despliegue
Para el desplpiegue se utilizo netlify como plataforma debido a su simplicidad y adminsitracion desde su pagina web.
https://whimsical-griffin-726995.netlify.app/

- Alejandro Mora


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
