/*
Fazer um programa para ler os três coeficientes de uma equação do segundo grau. Usando a fórmula
de Baskara, calcular e mostrar os valores das raízes x1 e x2 da equação com quatro casas decimais,
conforme exemplo. Se a equação não possuir raízes reais, mostrar uma mensagem. 

ENTRADAS:
Coeficiente a: 1
Coeficiente b: 0
Coeficiente c: -9

SAIDAS:
X1 = 3.0000
X2 = -3.0000
*/

var A = 1
var B = 0
var C = -9
var Delta = Math.pow(B,2)-4*(A*C)
var X1 = (-B + Math.sqrt(Delta))/2
var X2 = (-B - Math.sqrt(Delta))/2

if (Delta<0){
    console.log('Esta equacao nao possui raizes reais.')
}
else{
    console.log(`X1 = ${X1}`)
    console.log(`X2 = ${X2}`)
}