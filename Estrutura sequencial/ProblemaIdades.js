/*
Fazer um programa para ler o nome e idade de duas pessoas. Ao final mostrar uma mensagem com os 
nomes e a idade média entre essas pessoas, com uma casa decimal, conforme exemplo. 

SAIDAS:
Dados da primeira pessoa: 
Nome: Maria Silva
Idade: 19
Dados da segunda pessoa: 
Nome: Joao Melo
Idade 20
A idade média de Maria e Joaquim é de 19.5 anos
*/

var nome1 = 'maria'
var idade1 = 19
var nome2 = 'João'
var idade2 = 20

mediaIdades = (idade1 + idade2)/2

console.log(`A media de idades de ${nome1} e ${nome2} é de ${mediaIdades}`)