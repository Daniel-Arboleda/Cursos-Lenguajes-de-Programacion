// Métodos de la consola

// console.log();     ----> Mostrar el registro de los cambios en nuestro código


let x = "Hola mundo";
console.log("Hola mundo");
console.log(x);

// Cómo visualizar todas las funciones, metodos y atributos de la consola (console)

console.log(console);

// Funciona para marcar errores de manera controlada por el programador dentro de la consola y que visualice con aspecto de error y color en rojo
let t = "Error";
console.error("Esto es un error");
console.error(t);

// Las alertaes en la consola es para denotar una precaución en la pantalla de manera controlada y aparece de color amarillo y con el simbolo de alerta
let g = "Alerta";
console.warn("Esto es una alerta");
console.warn(g);

// Para denotar código informativo de manera controla en la consola, no tiene definido y es muy similar a la presentación de la método log
let v = 'Información';
console.info("Esto es infomativo");
console.info(v);

// Interpolar texto con variables del entorno global
let h = 'GOKU';
let anos = 33;
console.log(`Esto es interpolar texto con variables ${h}, El usuario tiene ${anos} `);

// Las tablas es una manera de mostrar información de manera ordenada en la consola mediante el diseño de tablas

let u = [3, 5, 7, 8, 9, 8, 10, 100, -500, 0.55]
console.table(u);

// Método para limpiar la consola
console.clear();

// Método para analizar el tiempo que tarda o toma el código en reproducir
console.time("El tiempo que tardo");
for (let i = 0; i <= 100; i++){
    console.count(i);
    console.log(i);
};
console.timeEnd("El tiempo que tardo");

// Para agrupar datos en acordeón de la consola usaremos la siguiente lógica

console.group();
console.log("Hola mundo");
console.log("Hola mundo");
console.log("Hola mundo");
console.log("Hola mundo");

console.groupCollapsed();
console.log("Hola mundo");
console.log("Hola mundo");
console.log("Hola mundo");

console.clear();








