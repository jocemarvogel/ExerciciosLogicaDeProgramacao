/*
Fazer um programa para ler dois números inteiros, e dizer se um número é múltiplo do outro. Os
números podem ser digitados em qualquer ordem. 

ENTRADA:            SAIDA:
6                   Sao multiplos
24
------------------------------------

13                  Nao sao multiplos
5

*/

function multiplos(a,b){

    if ((a % 2 == 0) || (b % 2 == 0)){
      return console.log(`${a} e ${b} são multiplos`)
    } else if ((a % 2 == 1) && (b % 2 == 1)){
      return console.log(`${a} e ${b} NÃO são multiplos`)
    }
}

multiplos(13,5)
