/*
Fazer um programa para ler uma duração de tempo em segundos, daí imprimir na tela esta duração no 
formato horas:minutos:segundos. 

ENTRADA:
Digite a duracao em segundos: 300

SAIDA:
0:5:0 

ENTRADA:
Digite a duracao em segundos: 12506

SAIDA:
3:28:26
*/

var duracaoSeg = 12506

var horas = duracaoSeg/3600;
var minutos = (duracaoSeg%3600)/60;
var segundos = duracaoSeg%60

console.log(`${horas.toFixed(0)}:${minutos.toFixed(0)}:${segundos.toFixed(0)}`)