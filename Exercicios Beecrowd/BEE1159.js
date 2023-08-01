/*
O programa deve ler um valor inteiro X indefinidas vezes. (O programa irá parar quando o valor de X for igual a 0). Para cada X lido, imprima a soma dos 5 pares consecutivos a partir de X, inclusive o X , se for par. Se o valor de entrada for 4, por exemplo, a saída deve ser 40, que é o resultado da operação: 4+6+8+10+12, enquanto que se o valor de entrada for 11, por exempo, a saída deve ser 80, que é a soma de 12+14+16+18+20.

ENTRADA
O arquivo de entrada contém muitos valores inteiros. O último valor do arquivo é zero.

SAIDA
Imprima a saida conforme a explicação acima e o exemplo abaixo.
*/

var numeros = [4,11,15,4,13,20,220,11,0]
var valor = 0
var quantidadePares = 4

for (var i = 0 ; i < numeros.length ; i++){
    if (numeros[i] != 0){
        if (numeros[i] % 2 == 0){
            var soma = 0
            for (var j = 0; j <= quantidadePares ; j++){
                valor = numeros[i]
                soma += valor
                numeros[i] +=2
            }
        } else { 
            numeros[i] +=1
            soma = 0
            for (var m = 0; m <= quantidadePares ; m++){
                valor = numeros[i]
                soma += valor
                numeros[i] +=2
            }
        }
        console.log(soma)
    } else {
        break
    }  
}

