/*
Fazer um programa para ler a quantidade de glicose 
no sangue de uma pessoa e depois mostrar na tela a 
classificação desta glicose de acordo com a tabela de 
referência ao lado. 

Classificação Glicose
Normal     -----   Até 100 mg/dl
Elevado    -----   Maior que 100 até 140 mg/dl
Diabetes   -----   Maior de 140 mg/dl

ENTRADA:                                     SAIDA:

Digite a medida da glicose: 90.0  ----- Classificacao: normal
Digite a medida da glicose: 140.0 ----- Classificacao: elevado
Digite a medida da glicose: 143.2 ----- Classificacao: diabetes

*/

function glicose(valor){
    if (valor>0 && valor<=100){
        console.log(`${valor}mg/dl - Classificacao: normal`)
    } else if (valor>100 && valor <=140){
        console.log(`${valor}mg/dl - Classificacao: elevado`)
    } else {
        console.log(`${valor}mg/dl - Classificacao: diabetes`)
    }
}

glicose(90)
 