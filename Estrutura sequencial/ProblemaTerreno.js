/*Problema "terreno" 
Fazer um programa para ler as medidas da largura e comprimento de um terreno retangular com uma 
casa decimal, bem como o valor do metro quadrado do terreno com duas casas decimais. Em seguida, 
o programa deve mostrar o valor da área do terreno, bem como o valor do preço do terreno, ambos com 
duas casas decimais, conforme exemplo.

ENTRADAS
Digite a largura do terreno: 10.0
Digite o comprimento do terreno: 30.0
Digite o valor do metro quadrado: 200.00

SAIDAS:
Area do terreno = 300.00 
Preco do terreno = 60000.00 
*/

var largura = 10.0;
var comprimento = 30.0;
var valor = 200.0;
var area = largura*comprimento;
var preco = valor*area;

console.log('Area do terreno = '  + area );
console.log('Valor do terreno = '  + preco );

