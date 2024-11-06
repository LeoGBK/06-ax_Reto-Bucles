// Code for printing numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Printing separating line of dashes
console.log("------------------");

// Code for navigating a list of colors
let lista = ["rojo", "verde", "azul", "amarillo"];

for (let color of lista) {
    console.log(color);
}

// Printing separating line of dashes
console.log("------------------");

// Code for navigating an object persona
let persona = { "nombre": "María", "edad": 27, "profesión": "diseñadora" };

for (let dato in persona) {
    console.log(dato + ":", persona[dato]);
}