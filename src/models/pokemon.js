export default class Pokemon{

    //-----------------------------------------
    // Constructor
    //-----------------------------------------

    /**
     * Inicializa un pokemon con valores predeterminados
     * @param {*} pId Id del pokemon
     * @param {*} pNombre Nombre del pokemon
     * @param {*} pColor Color del pokemon
     * @param {*} pImagen Imagen del pokemon
     * @param {*} pDescripcion Descriocion del pokemon
     * @param {*} pCategoria Categoria del pokemon
     * @param {*} pAltura Altura del pokemon
     * @param {*} pPeso Peso del pokemon
     * @param {*} pHabilidad Habilidad del pokemon
     * @param {*} pTipos Tipos del pokemon
     * @param {*} pDebilidades Debilidades del pokemon
     */
    constructor(pId, pNombre, pColor, pImagen, pDescripcion,pCategoria, pAltura, pPeso, pHabilidad, pTipos , pDebilidades ){
        this.id = pId;
        this.nombre = pNombre;
        this.color = pColor;
        this.imagen = pImagen;
        this.descripcion = pDescripcion;
        this.categoria = pCategoria;
        this.altura = pAltura,
        this.peso = pPeso; 
        this.habilidad = pHabilidad;
        this.tipos = pTipos;
        this.debilidades = pDebilidades;
    }   

    //-----------------------------------
    // Metodos
    //-----------------------------------

    /**
     * Metodo que retorna toda la informacion del pokemon 
     * en un string separado por comas
     * @returns Retorna un string con toda la informacion 
     */
    toString(){
        const separador = ",";

        let info = this.id+separador+' Nombre: '+this.nombre + separador + ' Color: '+this.color+separador+ ' Imagen: '+
            this.imagen+separador+' Descripcion:  '+this.descripcion+separador+' Categoria: '+ this.categoria+ separador+ 'Altura: '+
            this.altura+separador+' Peso: '+this.peso+separador+' Habilidad:  '+this.habilidad + separador + ' Tipos: ' + this.tipos+ separador
            + ' Debilidades: '+this.debilidades;

        return info;
    }
}