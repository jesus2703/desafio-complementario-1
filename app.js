// Algoritmo para calcular el promedio de 4 notas de un estudiante. Si el promedio es mayor o igual a 10 se muestra "Aprobado" y si el promedio es menor a 10 muestra "Reprobado"

let notaUno = parseFloat(prompt("Ingrese nota 1er parcial"));
let notaDos = parseFloat(prompt("Ingrese nota 2do parcial"));
let notaTres = parseFloat(prompt("Ingrese nota 3er parcial"));
let notaCuatro = parseFloat(prompt("Ingrese nota 4to parcial"));
let promedio = (notaUno+notaDos+notaTres+notaCuatro)/4;
console.log(promedio);

if (promedio >= 10) {

    alert(`El promedio es ${promedio} y esta aprobado`)
    
} else {

    alert(`El promedio es ${promedio} y esta reprobado`)
    
}