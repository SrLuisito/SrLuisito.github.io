
/*

// fetch() hacer pedidos de apis desde el frontend


fetch(https/:recurso)
.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data)
})

.catch(function(error){
    console.log(error)
})

si te interesa https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch


// ojo con session y localstorage
// session solo puede almacenar valores en formato string
// localstorage no tiene fecha de expiracion
console.log("Hola maquina, Bienvenido al frontend")

//let juan = document.querySelector('.juan') // se encarga solo del primer elemento encontrado

// let nombres = document.querySelectorAll(.juan) si hubiera mas de uno


// let div = document.querySelectorAll('div') No usar 💀💀💀
// let juanSiFueraId = document.getElementById('id')


//document.querySelector(juan).innerHTML = "jUAN 2" // tambien se puede solo agregar palabras mediante +=
let juan = document.querySelector('.juan');
if (juan) {
    juan.innerHTML = "jUAN 2";
} else {
    console.error('No se encontró el elemento con la clase "Juan"');
}   

// document.querySelector('h1').style.  recorda que textos que usan - ahora usan camelcase
// y en caso de querer cambiar algun valor document.querySelector('h1').style.textAlign = "center";



let titulo = document.querySelector('.claseCheta');
titulo.style.color = 'cyan';

// nombreClase.classList.contains("peso") devuelve un booleano 



document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón por su ID
    let toggleButton = document.getElementById('toggleTheme');
    
    // Verifica el estado del tema desde localStorage
    let darkMode = localStorage.getItem('darkMode') === 'true';

    // Aplica el tema inicial basado en el estado guardado
    document.body.classList.toggle('dark-mode', darkMode);
    toggleButton.textContent = darkMode ? 'Modo Claro' : 'Modo Oscuro';

    // Aplica el estilo inicial
    updateStyles(darkMode);

    // Agrega un listener para el evento de clic en el botón
    toggleButton.addEventListener('click', function() {
        darkMode = !darkMode; // Alterna el estado del tema
        document.body.classList.toggle('dark-mode', darkMode);
        toggleButton.textContent = darkMode ? 'Modo Claro' : 'Modo Oscuro';
        updateStyles(darkMode);
        localStorage.setItem('darkMode', darkMode);
    });

    // Función para actualizar los estilos
    function updateStyles(isDarkMode) {
        if (isDarkMode) {
            // Modo oscuro
            document.body.style.backgroundColor = '#191919';
            document.querySelector('h1').style.color = 'white';
        } else {
            // Modo claro
            document.body.style.backgroundColor = 'white';
            document.querySelector('h1').style.color = 'black';
        }
    }
});


*/





// codigo nuevo


document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón por su ID
    const toggleButton = document.getElementById('toggleTheme');
    
    // Verifica el estado del tema desde localStorage
    let darkMode = localStorage.getItem('darkMode') === 'true';

    // Aplica el tema inicial basado en el estado guardado
    document.body.classList.toggle('dark-mode', darkMode);
    toggleButton.textContent = darkMode ? 'Modo Claro' : 'Modo Oscuro';

    // Agrega un listener para el evento de clic en el botón
    toggleButton.addEventListener('click', function() {
        darkMode = !darkMode; // Alterna el estado del tema
        document.body.classList.toggle('dark-mode', darkMode);
        toggleButton.textContent = darkMode ? 'Modo Claro' : 'Modo Oscuro';
        localStorage.setItem('darkMode', darkMode);
        updateStyles(darkMode);
    });

    // Función para actualizar los estilos
    function updateStyles(isDarkMode) {
        if (isDarkMode) {
            // Modo oscuro
            document.body.style.backgroundColor = '#191919';
            document.querySelector('h1').style.color = 'white';
        } else {
            // Modo claro
            document.body.style.backgroundColor = 'white';
            document.querySelector('h1').style.color = 'black';
        }
    }

    // Inicializar estilos
    updateStyles(darkMode);
});
