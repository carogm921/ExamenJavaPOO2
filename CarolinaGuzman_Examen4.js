class Persona {
    nombre;
    apellido;
    edad=0;

    //constructor recibe y asigna
    constructor(nombre="Maria", apellido="Sanchez", edad="18" ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    //imprimir en consola los atributos de la persona
    get Detalle(){
        return this.atributosPersona();
    }
    atributosPersona(){
        return this.nombre + " " + this.apellido +" " + this.edad + " años";
    }

}


let persona1 = new Persona("Maria", "Carvajal", "33");
console.log (persona1.Detalle);


//Clase Empleado que hereda de Persona e incluye el atributo de Tipo (empleado de
// confianza(C) y de sindicato(S))

class Empleado extends Persona {

    sueldo=0;
     constructor(nombre, apellido, edad) {
         super(nombre, apellido, edad);
    }



set empleadoConfianza (C) {
     let v1 = numeroAleatorio * 500;
    let sueldo = v1 / (1-13 /100);
    console.log(sueldo);
    this._empleadoConfianza = C;
}
set empleadoSindicato (S) {
    let v2 = numeroAleatorio * 350;
    let sueldo = v2 / (1-10 /100);
    console.log(sueldo);
    this._empleadoSindicato = S;

}
}

    let empleado1 = new Persona("Maria", "Sanchez", "30");
empleado1.empleadoConfianza="C";
console.log (empleado1.Detalle + " " + empleado1.empleadoConfianza);

let empleado2 = new Persona("Juan", "Almeira", "23");
empleado2.empleadoConfianza="C";
console.log (empleado2.Detalle + " " + empleado2.empleadoConfianza);

let empleado3 = new Persona("Dulce", "Salguero", "40");
empleado3.empleadoSindicato="S";
console.log (empleado3.Detalle + " " + empleado3.empleadoSindicato);



    //Clase Nomina tiene las propiedades de Empleados (arreglo)

class Nomina extends Empleado {

    diasTrabajados=0;

    constructor(nombre, apellido, edad ) {
        super(nombre, apellido, edad);

        }

}
/**
if (sueldo <=350){
    retencionS=10;
    sueldofinal= sueldo / (1-retencionS/100);
    console.log('El sueldo con el descuento es : ' + sueldo);

}

if (sueldo  >=350 || <=500) {
    retencionC=13;
    sueldofinal= sueldo / (1-retencionC/100);
    console.log('El sueldo con el descuento es : ' + sueldo);
    }
**/



    //Crear el método para calcular el pago por los días laborados será un número aleatorio del 5
// al 15, dependiendo del tipo de empleado y descontar los impuestos.
// Si es empleado de sindicato el pago por día es 350.00 USD, con un descuento de 10% de
// impuestos;

//Si es empleado de confianza el pago por día es de 500.00 USD, con un descuento del 13%
// de impuestos.
// ii.El constructor recibe arreglo empleado (dos empleados de confianza y uno de sindicato)
// iii.Agregar método calcularNomina() que muestra a cada empleado, con el total a pagar por
// empleado.




