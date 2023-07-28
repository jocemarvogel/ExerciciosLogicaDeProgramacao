/*
Supondo que a população de um país A seja da ordem de 8000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 20000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
*/

function populacaoCidades(cidadeA,cidadeB){
    var anos = 0
    while (cidadeA<cidadeB){
        cidadeA *= 1.03
        cidadeB *= 1.015
        anos +=1
    }
    console.log(cidadeA.toFixed(0))
    console.log(cidadeB.toFixed(0))
    console.log(`Vai demorar ${anos} anos`)
}

populacaoCidades(8000,20000)

