
// VARIABLES COMPUESTAS

let nombre = "Bullberry",
    estatura = 1.75,
    nacionalidad = "Colombia",
    comidaFavorita = 'Fresas con crema';

let persona = {
    nombre,
    nacionalidad,
    comidaFavorita
};
console.log(persona);


// Crear un objeto de manera tradicional o determinando sus variables

let usuario ={
    email: "bullberry@gmail.com",
    contraseña: "bullberry123",
    edad: 30,
    estatura: 1.75,
    usuarioActivo: true
};

console.log(usuario);
console.log(usuario.email);
console.log(usuario['usuarioActivo']);
console.log(usuario.marca);


usuario.nombre = "Bullberry";
console.log(usuario);
console.log(typeof usuario);

delete usuario.nombre;
console.log(usuario);
console.table(usuario);


