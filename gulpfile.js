/*-----------------------------------------------*/
/** Automatizacion de procesos en desarrollo **/
/*-----------------------------------------------*/ 
const {src, dest, watch, parallel} = require('gulp');

// Convertir imagenes a .webp
const webp = require('gulp-webp');
const notify = require('gulp-notify');

const paths= {
    imagenes: 'src/assets/img/normal/**/*'
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe( webp() )
        .pipe(dest('src/assets/img/webp'))
        .pipe(notify({ message: 'Imagen Webp'}));
}

function watchArchivos() {
    watch( paths.imagenes, versionWebp );
}

exports.default = parallel(versionWebp, watchArchivos ); 