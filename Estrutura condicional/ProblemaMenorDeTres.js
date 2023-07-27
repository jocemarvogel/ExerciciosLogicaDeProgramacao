/*Fazer um programa para ler três números inteiros. Em seguida, mostrar qual o menor dentre os três
números lidos. Em caso de empate, mostrar apenas uma vez.

ENTRADA:
Primeiro valor: 7
Segundo valor: 3
Terceiro valor: 8

SAIDA:
MENOR = 3 

*/

var PrimeiroValor = 7
var SegundoValor = 3
var TerceiroValor = 8

if(PrimeiroValor < SegundoValor && PrimeiroValor < TerceiroValor){
    console.log(`MENOR = ${PrimeiroValor}`)
} 
else if (PrimeiroValor > SegundoValor && PrimeiroValor < TerceiroValor){
    console.log(`MENOR = ${SegundoValor}`)
}
else{
    console.log(`MENOR = ${TerceiroValor}`)
}
