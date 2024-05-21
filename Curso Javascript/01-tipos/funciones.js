// VARIABLES COMPUESTAS

function saludar(){
    console.log("Hola mundo");
}

saludar();


function suma(){
    return 2 + 2;
};

let resultado = suma();

console.log(suma);
console.log(suma());
console.log(resultado);


function suma2(){
    return suma() + resultado;
};
let resultado2 = suma2();
console.log(suma2());

function multiplicacion(){
    return 5 * 5;
};
let resultado3 = multiplicacion();
console.log(multiplicacion());


function multsum(){
    return resultado3 + resultado;
};
console.log(multsum());


// Funcion que multiplique a * 2
let a = 10;
function mul(){
    return a * 2;
};
console.log(mul());


let variables = "x";
function Multiplicar(){
    return variables + 3;
};

console.log(Multiplicar());

