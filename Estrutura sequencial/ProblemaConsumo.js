/*
Fazer um programa para ler a distância total (em km) percorrida por um carro, bem como o total de 
combustível gasto por este carro ao percorrer tal distância. Seu programa deve mostrar o consumo 
médio do carro, com três casas decimais.

SAIDA:
Distancia percorrida: 500
Combustível gasto: 38.5
Consumo medio = 12.987 
*/

var distancia = 500
var combustivel = 38.5
var consumo = distancia/combustivel

console.log(`Consumo medio foi de ${consumo.toFixed(3)} litros por Km.`)