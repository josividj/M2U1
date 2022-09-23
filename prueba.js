const fondo = document.getElementsByClassName('fondo')[0];
const azul = document.getElementById('azul');
const verde = document.getElementById('verde');
const naranja = document.getElementById('naranja');
const blanco = document.getElementById('blanco');

azul.addEventListener('click',
    function () {
        if (fondo.classList.contains("verde") || fondo.classList.contains("naranja") || !(fondo.classList.contains("azul"))) {
            fondo.classList.remove('verde', 'naranja')
            fondo.classList.add('azul')
        }
        console.log(fondo.classList)
    }
);

verde.addEventListener('click',
    function () {
        if (fondo.classList.contains("azul") || fondo.classList.contains("naranja") || !(fondo.classList.contains("verde"))) {
            fondo.classList.remove('azul', 'naranja')
            fondo.classList.add('verde')
        }
        console.log(fondo.classList)
    }
);

naranja.addEventListener('click',
    function () {
        if (fondo.classList.contains("verde") || fondo.classList.contains("azul") || !(fondo.classList.contains("naranja"))) {
            fondo.classList.remove('verde', 'azul')
            fondo.classList.add('naranja')
        }
        console.log(fondo.classList)
    }
);

blanco.addEventListener('click',
    function () {
        (fondo.classList.remove('verde', 'naranja', 'azul').add('grey'))
            
        console.log(fondo.classList)
    }
);


