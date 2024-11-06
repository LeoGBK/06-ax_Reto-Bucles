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

// Printing separating line of dashes
console.log("------------------");

// Code for calculating the closer number whose square is less than 100
let i = 0;
let cuadrado = 0;
do {
    i++;
    cuadrado = i * i;
}
while (cuadrado < 100);
console.log("El número más cercano a 100 cuyo cuadrado es menor que 100 es:", i);

// Printing separating line of dashes
console.log("------------------");

// Printing even numbers from 2 to 10
for (i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}