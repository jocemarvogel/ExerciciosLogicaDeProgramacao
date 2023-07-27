/*
Uma operadora de telefonia cobra R$ 50.00 por um plano básico que dá direito a 100 minutos de
telefone. Cada minuto que exceder a franquia de 100 minutos custa R$ 2.00. Fazer um programa para
ler a quantidade de minutos que uma pessoa consumiu, daí mostrar o valor a ser pago.

ENTRADA:
Digite a quantidade de minutos: 103

SAIDA:
Valor a pagar: R$ 56.00 
 
*/

var quantidade_minutos = 198

var ate_100 = 50
var valor_minuto = 2
var valor_pagar = ate_100+(quantidade_minutos-100)*2

if (quantidade_minutos > 0 && quantidade_minutos <=100){
    console.log(`Valor a pagar: R$ ${ate_100.toFixed(2)}`)
} else {
    console.log(`Valor a pagar: R$ ${valor_pagar.toFixed(2)}`)
}   