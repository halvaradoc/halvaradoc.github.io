/**
 *  ESTRUCTURAS REPETITIVAS
 */

 /**
  * EJERCIOS RESUELTOS
  */

  
//   Ejemplo 4.1
//   Se requiere un algoritmo para obtener la suma de diez cantidades mediante la utilización de un ciclo “Mientras”.
//   Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S para representarlo.
//   Con base en lo que se requiere determinar se puede establecer que las variables
//   requeridas para la solución del problema son las mostradas en la tabla 4.1.

  

/* 
let C=1;
 let SU=0;
 let VA=0;
 while(C<=10){
    VA=+prompt(`Ingrese el número ${C}`);
    SU=SU+VA;
    C=C+1;
 }

 console.log(`La suma acumulada es: ${SU}`);   */


//  Ejemplo 4.2
//  Se requiere un algoritmo para obtener la suma de diez cantidades mediante la utilización de un ciclo Repite. 
//  Realice el diagrama de flujo, el pseudocódigo y diagrama N/S para representarlo.
//  La solución de este problema mediante el ciclo Repite, que también es conocido como ciclo Repeat en los diferentes lenguajes de programación, 
//  se puede establecer  mediante el diagrama de flujo 4.2. 
//  Las variables que se requieren son las que se muestran en la tabla 
//  4.1 (el ejemplo anterior y el presente son el mismo, 
//     lo que cambia es el planteamiento de solución del problema en lo que respecta al tipo de ciclo por utilizar). 
//     El diagrama de flujo 4.2 muestra la solución correspondiente mediante la utilización de este tipo de ciclo.

/* 
let SU=0;
let C=1;
let VA=0;
 do{
    VA=+prompt(`Ingrese el número ${C}`); 
    SU=SU+VA;
    C=C+1;
 }while(C<=10);

console.log(`La suma acumulada es: ${SU}`);  
 */


// Ejemplo 4.3
// Se requiere un algoritmo para obtener la suma de diez cantidades mediante la utilización de un ciclo Desde. 
// Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S para representarlo. 
// El ciclo Desde también es conocido como ciclo For en los diferentes lenguajes de programación.
// Se utilizarán las mismas variables mostradas en la tabla 4.1. 
// El diagrama de flujo 4.3 muestra la solución correspondiente utilizando el ciclo Desde.


/* let SU=0;
let VA=0;
let C=0;
for (let C = 1; C <= 10; C++){
   VA=+prompt(`Ingrese el número ${C}`);;
   SU=SU+VA;
 };
 
 console.log(`La suma acumulada es: ${SU}`);  */ 

// Ejemplo 4.4
// Se requiere un algoritmo para obtener la edad promedio de un grupo de N alumnos.
// Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S para representarlo,
// utilizando los tres tipos de estructuras de ciclo. La tabla 4.2 muestra las variables
// que se van a utilizar para la solución del problema, sin importar qué estructura de ciclo se utilice;
// por consiguiente, es la misma para los tres tipos de ciclo para los que se dará la solución.

/* let C=0;
let ED=0;
let SUM=0;
let NU=0;
let PR=0;
NU=+prompt("Ingrese el nuemero de alumnos...");
C=1;
while(C<=NU){
    ED=+prompt(`Ingrese la edad del alumno ${C}`);
    SUM=SUM+ED;
    C++;
};
PR=(SUM/NU);
console.log(`La edad promedio de ${NU} alumnos ingresados es : ${PR}`); */

// Ejemplo 4.5
// Se requiere un algoritmo para obtener la estatura promedio de un grupo de personas, 
// cuyo número de miembros se desconoce, el ciclo debe efectuarse siempre y cuando se tenga una estatura registrada.
//Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S para representarlo, utilizando el ciclo apropiado. 
/* 
let C=0;
let ES=0;
let SUM=0;
let PR=0;
C=1;
let NP=+prompt("Ingrese el numero de personas...");
while(C<=NP){
  ES=+prompt(`Ingrese la estatura de la persona ${C}`);
  while(ES===0){
    ES=+prompt(`Ingrese la estatura de la persona ${C}`);
  };
  SUM=SUM+ES;
  C++;
};
PR=(SUM/NP);
console.log(`La estaturas promedio de ${NP} personas ingresados es : ${PR}`);

 */

// Ejemplo 4.6
// Se requiere un algoritmo para determinar cuánto ahorrará una persona en un año, 
// si al final de cada mes deposita variables cantidades de dinero;
// además, se requiere saber cuánto lleva ahorrado cada mes. Realice el diagrama de flujo, 
// el pseudocódigo y el diagrama N/S para representarlo, utilizando un ciclo apropiado.
/* let AH=0;
let M=0;
let CA=0;
M=1;
while(M<=12){
    CA=+prompt(`Cantidad que se va a ahorrar del mes: ${M}`);
    AH=AH+CA;
    console.log(`El ahorro del mes: ${M} es : ${AH}`); 
    M++; 
};

console.log(`El ahorro final es: : ${AH}`);  */

/* Ejemplo 4.7

/*Algoritmo para determinar el número de cantidades positivas y negativas.*/

/* let C=0;
let CA=0;
let CP=0;
let CN=0;
let NU=0;
C=1;
NU=+prompt("Ingrese número de cantidades a evaluar:");
do{
    CA=+prompt(`Ingrese la cantidad  ${C}`);
    if(CA>0){
        CP=CP+1;
    }else{
    CN=CN+1;}
    C=C+1;
}while(C<=NU);

console.log(`Números positivos : ${CP}`);
console.log(`Números negativos : ${CN}`);

 */

// Ejemplo 4.8
// Realice un algoritmo para generar e imprimir los números pares que se encuentran entre 0 y 100. 
// Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S  para representarlo, utilizando el ciclo apropiado.
/* 
let N=0;
while(N<=100){
    console.log(N);
N=N+2
}
 */

// Ejemplo 4.9
// Realice un algoritmo para generar N elementos de la sucesión de Fibonacci (0, 1, 1, 2, 3, 5, 8, 13,…). 
// Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S para representarlo, utilizando el ciclo apropiado

/* let N=8;
let A=0;
let B=1;
let C=0;
console.log(A);
console.log(B);
let M=1;
while(M<=(N-2)){
    C=A+B;
    console.log(C);
    A=B;
    B=C;
    M=M+1; 
};

*/
//Ejemplo 4.10
// Una empresa tiene el registro de las horas que trabaja diariamente un empleado durante la semana (seis días) 
// y requiere determinar el total de éstas, así como el sueldo que recibirá por las horas trabajadas.
//  Realice un algoritmo para determinar esto y represéntelo mediante  el diagrama de flujo, el pseudocódigo 
//  y el diagrama N/S, utilizando el ciclo apropiado. 

/* D=0;
PH=0;
SH=0;
HT=0;
SU=0;
PH=+prompt("Ingrese el pago por horas");
D=1
while (D<=6) {
    HT=+prompt("Ingrese horas trabajadas:");
    SH=SH+HT;
    D=D+1;
}
SU=SH*PH;
console.log(`Las horas laboradas son : ${SH}`);
console.log(`El sueldo es = : ${SU}`); */

// Ejemplo 4.11
// Una persona se encuentra en el kilómetro 70 de la carretera AguascalientesZacatecas, 
// otra se encuentra en el km 150 de la misma carretera, la primera viaja en dirección a Zacatecas,
//  mientras que la segunda se dirige a Aguascalientes, a la misma velocidad. 
//  Realice un algoritmo para determinar en qué kilometro de esa carretera se encontrarán y represéntelo 
//  mediante el diagrama de flujo, el pseudocódigo y el diagrama N/S, utilizando el ciclo apropiado 

/* 
let KA=70;
let KB=150;
let R=KB-KA;

while(R>0){
    KA=KA+1;
    KB=KB-1;
    R=KB-KA;
}
if (R=0) {
    KA=KB;
    
}else{
    KA=KA-0.5};

console.log(`Punto de encuentro es : ${KA}`); */

/* Ejemplo 4.12
Un empleado de la tienda “Tiki Taka” realiza N ventas durante el día, 
se requiere saber cuántas de ellas fueron mayores a $1000, 
cuántas fueron mayores a $500 pero menores o iguales a $1000,
y cuántas fueron menores o iguales a $500. Además, 
se requiere saber el monto de lo vendido en cada categoría y de forma global.
Realice un algoritmo que permita determinar lo anterior y represéntelo mediante el diagrama de flujo,
el pseudocódigo y el diagrama N/S, utilizando el ciclo apropiado.  */

/* let N=0;
let CN=0;
let A=0;
let B=0;
let C=0;
let V=0;
let T1=0;
let T2=0;
let T3=0;
let TT=0;
N=+prompt("Numero de ventas:");
CN=1;
while (CN<=N) {
    V=+prompt("Monto de la venta:");
    if (V>1000) {
        A = A + 1 ;
       T1 = T1 + 1;
        
    }else{
        if (V > 500) {
            B = B + 1 ;
            T2 = T2 + 1;
        }else{
            C = C + 1;  
            T3 = T3 * 1;
        };
    };
   TT = TT + V; 
   CN = CN + 1;
};
console.log(`Las ventas y el total de ventas 1  : ${A} ${T1}`);
console.log(`Las ventas y el total de ventas 1  : ${B} ${T2}`);
console.log(`Las ventas y el total de ventas 1  : ${C} ${T3}`);
console.log(`El total de ventas es:  : ${TT}`); */

// Ejemplo 4.13
// Una persona adquirió un producto para pagar en 20 meses. El primer mes pagó $10, 
// el segundo $20, el tercero $40 y así sucesivamente. Realice un algoritmo para determinar cuánto debe pagar mensualmente
// y el total de lo que pagó después de los 20 meses y represéntelo mediante el diagrama de flujo, 
// el pseudocódigo y el diagrama N/S utilizando el ciclo apropiado. 
/* 
I=0;
P=0;
T=0;


P = 5.0;
for (let I = 1; I <= 20; I++) {
   P=P*2;
   console.log(`El pago mensual :" ${P}`);
   T = T + P; 
}
console.log(`“Pago total :" ${T}`); */

// Ejemplo 4.14
// Una empresa les paga a sus empleados con base en las horas trabajadas en la semana.
//  Realice un algoritmo para determinar el sueldo semanal de N trabajadores y, además, 
//  calcule cuánto pagó la empresa por los N empleados. Represéntelo mediante diagrama de flujo, 
//  pseudocódigo y diagrama N/S, utilizando el ciclo apropiado.  

// N=0;
// HT =0;
// PH =0;
// SS =0;
// I =0;
// TOT=0;
// N=+prompt("Ingrese numero de trabajadores:");
// for (let I = 1; I <= N; I++) {
//     HT=+prompt("Ingrese Horas trabajadas :");
//     PH=+prompt("Ingrese Pago por hora: ");
//     SS = HT * PH 
//     console.log(`Sueldo Semanal :" ${SS}`);
//     TOT = TOT + SS 
// }
// console.log(`Pago la empresa por los ${N} empleados :" ${TOT}`);


// Ejemplo 4.15
// Una empresa les paga a sus empleados con base en las horas trabajadas en la semana. 
// Para esto, se registran los días que laboró y las horas de cada día. 
// Realice un algoritmo para determinar el sueldo semanal de N trabajadores y 
// además calcule cuánto pagó la empresa por los N empleados. Represéntelo mediante diagrama de flujo,
//  pseudocódigo y diagrama N/S, utilizando el ciclo apropiado. 

/* let N=0;
let HT=0;
let PH=0;
let SH=0;
let DT=0;
let SS=0;
let I=0;
let D=0;
let TOT=0;
N=+prompt("Ingrese numero de trabajadores:");
for (let I = 1; I <= N; I++){
    DT=+prompt("Ingrese Dias trabajadas :");
    PH=+prompt("Ingrese Pago por hora: ");
    SH=0;
    for (let D = 1; D <= DT; D++) {
        HT=+prompt("Ingrese Horas trabajadas: ");
        SH = SH + HT;
    }
    SS = SH * PH;
    console.log(`El sueldo del trabajador :" ${I} es : ${SS}`);
    TOT = TOT + SS;
}
console.log(`“El total que se pagó es : ${TOT}`); 
 */

// Ejemplo 4.16
// La cadena de tiendas de autoservicio  “El mandilón” cuenta con sucursales en C ciudades diferentes de la República,
//  en cada ciudad cuenta con T tiendas y cada tienda cuenta con N empleados, 
//  asimismo, cada una registra lo que vende de manera individual cada empleado, 
//  cuánto fue lo que vendió cada tienda, cuánto se vendió en cada ciudad 
//  y cuánto recaudó la cadena en un solo día. 
//  Realice un algoritmo para determinar lo anterior y represéntelo mediante un diagrama de flujo, 
//  utilizando el ciclo apropiado. 

/* TT =0;
CI =0;
TI =0;
ST =0;
SE =0;
VE =0;
EM =0;
I=0;
J=0;
K=0; 

CI=+prompt("Ingrese numero  ciudades donde hay tiendas :");
for (let I = 1; I <=CI ; I++) {
    TI=+prompt(`Ingrese el numero de tiendas en la ciudad nro. : ${I}`);
    ST=0;
    for (let J = 1; J <= TI; J++) {
      EM=+prompt(`Ingrese el numero de empleados. de la tienda  : ${J}`);
      SE=0;
      for (let K = 1; K <= EM; K++) {
        VE=+prompt(`Ingrese  las ventas del empleado  : ${K}`);
        SE=SE+VE  ;     
      } ; 
      console.log(`Total ventas de la tienda ${J} ${SE}`); 
      ST = ST + SE;
    };
    console.log(`“Total ventas de la ciudad ${I} ${ST}`); 
    TT = TT + ST;
} ;
console.log(`“Recaudacion total de la cadena ${TT}`);  */
 