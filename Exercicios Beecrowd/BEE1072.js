/*
Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida.
Mostre quantos destes valores X estão dentro do intervalo [ N>50 & N<50 ]   e quantos estão fora do intervalo, mostrando essas informações.

ENTRADA
A primeira linha da entrada contém um valor inteiro N (N < 10000), que indica o número de casos de teste.
Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).
 

SAIDA
Para cada caso, imprima quantos números estão dentro (in) e quantos valores estão fora (out) do intervalo.
*/

var numeroRepetições = (Math.random()*10).toFixed(0)
console.log(`Quandidade de repetições= ${numeroRepetições}`)
var numeros_sorteados = []
var menor50 = 0
var maior50 = 0
for (var i = 0; i<numeroRepetições; i++){
    var numero = (Math.random()*100).toFixed(0)
    
    if (numero<=50){
        menor50 += 1
    } else {
        maior50 += 1
    }

    numeros_sorteados.push(numero)
}
console.log(`Qantidade de numeros maiores que 50 = ${maior50}`)
console.log(`Qantidade de numeros menores que 50 = ${menor50}`)
console.log(numeros_sorteados)


