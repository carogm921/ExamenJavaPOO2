
let horasTrabajadas=40;
let pagoxhora=265.00;
let pagoxextra= 350.00;
let totalHoras=53;
let horasextras=totalHoras-horasTrabajadas;
let salario;
let salarioExtra;


if(totalHoras<=40){
    salario=horasTrabajadas*pagoxhora;

}

else {
    salarioExtra = pagoxextra * horasextras;
    salario= horasTrabajadas*pagoxhora;

}

console.log("El total a pagar por horas laborales normal (40hrs) es de: " +salario);
console.log("El total a pagar por horas extras " +horasextras + " es de: " +salarioExtra);
