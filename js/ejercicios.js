//OPERADORES

// 1 Función para calcular el área de un triángulo
function area() {
    let base = parseInt(prompt("Ingrese la base:"));
    let altura = parseInt(prompt("Ingrese la altura:"));
    let resultado = (base * altura) / 2;
    return "El area del triaqngulo es: " + resultado;
}

// 2 Función para calcular la suma de dos números funcion flecha
let suma = () => {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    let resultado = num1 + num2;
    return "La suma total es: " + resultado;
};




// 3 Función para calcular el cuadrado de un número
function cuadrado() {
    let num = parseInt(prompt("Ingrese un número:"));
    let resultado = num * num;
    return "El cuadrado es: " + resultado;
}

// 4 Función para convertir euros a dólares
function conversion() {
    let euros = parseInt(prompt("Ingrese el valor de los euros:"));
    let dolares = euros * 1.08;
    return "la convericon de euros a dolares es de: " + dolares;
}

// 5 Función para calcular el área y el perímetro de un cuadrado
function lado() {
    let lado = parseInt(prompt("Ingrese el lado del cuadrado:"));
    let area = lado * lado;
    let perimetro = lado * 4;
    return "El area del cuadrado es: " + area + "El perimetro del cuadrado es : " + perimetro;
}

// 6 Función para calcular el área y el volumen de un cilindro
function cilindro() {
    let radio = parseInt(prompt("Ingrese el valor del radio:"));
    let altura = parseInt(prompt("Ingrese el valor de la altura:"));
    let area = 2 * Math.PI * radio * (altura + radio);
    let volumen = Math.PI * Math.pow(radio, 2) * altura;
    return "El area es :" + area + "El volumen es :" + volumen ;
}

// 7 Función para calcular la longitud y el área de una circunferencia
function radio() {
    let radio = parseInt(prompt("Ingrese el valor del radio:"));
    let longitud = 2 * Math.PI * radio;
    let area = Math.PI * radio * radio;
    return "La longitud es: " + longitud + "el area es :" + area;
}

// 8 Función para calcular el promedio de tres números
function promedio() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    let num3 = parseInt(prompt("Ingrese el tercer número:"));
    let total = (num1 + num2 + num3) / 3;
    return "El promedio de los 3 numeros es de :" + total;
}

//CONDICIONALES

// 1 Ejercicio  Determinar si un número ingresado por teclado es positivo o negativo
function positivo() {
    let numero = parseInt(prompt("Ingrese un número:"));
    if (numero > 0) {
        return "El número es positivo";
    } else if (numero < 0) {
        return "El número es negativo";
    } else {
        return "El número es cero";
    }
}

// 2 Ejercicio para Encontrar el mayor y el menor entre dos números 
function mayor() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    if (num1 > num2) {
        return "El mayor es " + num1 + " y el menor es " + num2;
    } else if (num2 > num1) {
        return "El mayor es " + num2 + " y el menor es " + num1;
    } else {
        return "Los números son iguales";
    }
}
//3 funcion para encontrar el mayor y el menor numero de tres numeros
function tres() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    let num3 = parseInt(prompt("Ingrese el tercer número:"));

    let mayor, menor;

    // Encontrar el mayor
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }

    // Encontrar el menor
    if (num1 <= num2 && num1 <= num3) {
        menor = num1;
    } else if (num2 <= num1 && num2 <= num3) {
        menor = num2;
    } else {
        menor = num3;
    }

    return "El numero mayor es " + mayor + " y el numero menormenor es " + menor;
}

// 4 Ejercicio Sumar o restar dos números según la relación entre ellos funcion flecha
let sumar = () => {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    if (num1 < num2) {
        return "El primer número es menor, por lo tanto, la suma es: " + (num1 + num2);
    } else {
        return "El segundo número es menor, por lo tanto, la resta es: " + (num1 - num2);
    }
};

// 5 Ejercicio Calcular el cociente entre dos números evitando la división por cero
function concinete() {
    let num1 = parseInt(prompt("Ingrese el numerador:"));
    let num2 = parseInt(prompt("Ingrese el denominador:"));
    if (num1>0) {
        return "la divicion es: "+num1/num2;
    } else {
        return "su divicion no es pocible ya que es por 0";
    }
}

// 6 Ejercicio Sumar si al menos uno de los números es negativo, en caso contrario, multiplicar
function multiplicar() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    if (num1 < 0 ) {
        return "un numero ingresado es negativo por lo cual la suma es: "+num1 + num2;
    } else {
        return "los dos numeros son pocitivos por lo cual la multiplicacion es: "+ num1 * num2;
    }
}

// 7 Ejercicio Determinar si un año es bisiesto
function bisiesto() {
    let año = parseInt(prompt("Ingrese un año:"));
    if ((ano % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
        return "El año " + año + " es bisiesto";
    } else {
        return "El año " + año + " no es bisiesto";
    }
}

//CICLOS
//1.multiplos de tres

function multiplostres() {
    let resultado = "";
    
    for (let i = 0; i <= 100; i+=3) {
        resultado += i + "\n";
    
    }
    return "Los multiplos de tres del 1 al 100 son : "+ resultado;
}

// 2. Números impares entre 0 y 100 funcion flecha
let impares = () => {
    let impares = [];
    for (let i = 1; i <= 100; i += 2) {
        impares += i + "\n"; 
    }
    return "los numeros impareas son: "+impares;
}     

// 3. Números pares del 1 al 100
function pares() {
    let pares = "";
    for (let i = 0; i <= 100; i += 2) {
        pares += i + "\n";
    }
    return"los Números pares del 1 al 100: "+ pares;
}

// 4. Cuadrados de los números del 1 al 30
function cuadradost() {
    let cuadrados = "";
    for (let i = 1; i <= 30; i++) {
        cuadrados += i * i + "\n";
    }
    return "los Cuadrados de los números del 1 al 30 son :"+cuadrados;
}

// 5. Suma de los cuadrados de los cien primeros números naturales
function sumacuadrado() {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i * i;
    }
    return "la Suma de los cuadrados de los cien primeros números naturales son :"+suma;
}

// 6. Mostrar secuencia ascendente entre dos números dados
function secuencias() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    let secuencia = "";
    for (let i = num1; i <= num2; i++) {
        secuencia += i + "\n";
    }
    return "la secuencia ascendente entre los numeros es :"+secuencia;
}

// 7. Sumar números ingresados por teclado hasta que se ingrese 0
function sumarn() {
    let suma = 0;
    let numero;
    do {
        numero = parseInt(prompt("Ingrese un número o ingrese 0 para finalizar :"));
        suma += numero;
    } while (numero !== 0);
    return "la suma de los numeros es: "+suma;
}