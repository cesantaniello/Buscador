//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

//Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''        
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); //Muestra los autos al cargar

    //Llenar las opciones de años
    llenarSelect()
})

//EventListener para los select de búsqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
})

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);

    filtrarAuto();
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
})



//Funciones
function mostrarAutos() {
    autos.forEach(auto => {
        
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');
        
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: € ${precio} - Color: ${color}
        
        `;

        //Insertar en el HTML
        resultado.appendChild(autoHTML);
    });
}

//Genera los años del select
function llenarSelect(){
    for (let index = max; index >= min; index--) {
        const opcion = document.createElement('option');
        opcion.value = index;
        opcion.textContent = index;
        year.appendChild(opcion); //Agrega las opciones de año al select
    }
}

//Función que filtra en base a la búsqueda
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);

    console.log(resultado);
}

function filtrarMarca(auto) {
    const{marca} = datosBusqueda;
    if(marca){
        return auto.marca === marca
    } else {
        return auto;    
    } 
}

function filtrarYear(auto) {
    const{year} = datosBusqueda;
    if(year){
        return auto.year === year;
    } else {
        return auto;    
    } 
}