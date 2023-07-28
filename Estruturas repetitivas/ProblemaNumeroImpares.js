/*
Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.
*/

var valor = 50

for (var i=0;i<=valor;i++){
    if(i%2!=0){
        console.log(i)
    } else {
        continue
    }
}