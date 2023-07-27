/*
Fazer um programa para ler o nome de um(a) funcionário(a), o valor que ele(a) recebe por hora, e a 
quantidade de horas trabalhadas por ele(a). Ao final, mostrar o valor do pagamento do funcionário com 
uma mensagem explicativa, conforme exemplo. 

SAIDA:
Nome: Joao Silva
Valor por hora: 50.00
Horas trabalhadas: 60
O pagamento para Joao Silva deve ser 3000.00 
*/

var nome = 'João Silva'
var valorH = 50.0
var horasT = 60
var salario = valorH*horasT

console.log(`O pagamento para ${nome} deve ser R$${salario.toFixed(2)} reais`)