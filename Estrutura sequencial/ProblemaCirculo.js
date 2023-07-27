/*
Fazer um programa para ler o valor "r" do raio de um círculo, e depois mostrar o valor da área do 
círculo com três casas decimais. A fórmula da área do círculo é a seguinte: 𝑎𝑟𝑒𝑎 = 𝜋. 𝑟
ଶ
. Você pode 
usar o valor de 𝜋 fornecido pela biblioteca da sua linguagem de programação, ou então, se preferir, use 
diretamente o valor 3.14159. 

SAIDA:
Digite o valor do raio do circulo: 2.0
AREA = 12.566 
*/

var raioC = 2.0
var areaC = Math.PI*Math.pow(raioC,2)

console.log(`A area da circunferencia é de ${areaC.toFixed(3)}.`)
