/*
Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia. 
O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto, 
e o valor em dinheiro dado pelo cliente (suponha que haja dinheiro suficiente). Seu programa deve 
mostrar o valor do troco a ser devolvido ao cliente. 

ENTRADAS:
Preço unitário do produto: 8.00
Quantidade comprada: 2
Dinheiro recebido: 20.00

SAIDAS:
TROCO = 4.00
*/

var precoUnitario = 8.00
var quantidade = 2
var dinheiroRecebido = 20.00
var troco = dinheiroRecebido - (quantidade*precoUnitario)


console.log(`O total de troco é de R$${troco.toFixed(2)} reais`)

