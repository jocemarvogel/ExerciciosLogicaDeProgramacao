/*
Ler um valor N. Calcular e escrever seu respectivo fatorial. Fatorial de N = N * (N-1) * (N-2) * (N-3) * ... * 1.

A entrada contém um valor inteiro N (0 < N < 13).

ENTRADA:        SAIDA:
4               24
6               720
*/


function multFatorial(numero){
    var fatorial = 1
    for (var i=numero ; i>0; i--){
        fatorial *= i
        console.log(fatorial)
    }
    
    return(console.log(`O fatorial de ${numero} é: ${fatorial}.`))
}

multFatorial(0)
