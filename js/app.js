//Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); //Muestra los autos al cargar

    //Llenar las opciones de años
    llenarSelect()
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