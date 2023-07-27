/*Fazer um programa para ler as medidas da base e altura de um retângulo. Em seguida, mostrar o valor 
da área, perímetro e diagonal deste retângulo, com quatro casas decimais, conforme exemplos. 

SAIDAS:
Base do retangulo: 4.0
Altura do retangulo: 5.0
AREA = 20.0000 
PERIMETRO = 18.0000 
DIAGONAL = 6.4031 

*/

var baseR = 4;
var alturaR = 5;
var areaR = baseR*alturaR
var perimetroR = baseR*2 + alturaR*2
var diagonalR = Math.sqrt(Math.pow(baseR,2) + Math.pow(alturaR,2))
console.log('A area do retangulo é de: ' + areaR)
console.log('O perimetro do retangulo é de: ' + perimetroR)
console.log('A adiagonal do retangulo é de: ' + diagonalR.toFixed(4))