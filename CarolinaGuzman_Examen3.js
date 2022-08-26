let array1 = [3, 2, 1, 1, 2, 3, 2, 3, 1];
let array2 = [1, 1, 2, 2, 1, 1, 1, 2, 1];
let suma = [];
let multi = [];

console.log("Arreglo : [" + array1 + "]");
console.log("Arreglo 2 : [" + array2 + "]" );


for(let i = 0; i <array1.length ; i++){
    suma[i] = array1[i] + array2[i];
    console.log( array1[i] + "+" + array2[i] + "=" + suma[i]);


    multi[i] = array1[i] * array2[i];
    console.log( array1[i] + "*" + array2[i] + "=" + multi[i]);
    console.log("----");
}
