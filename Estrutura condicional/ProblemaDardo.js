/*
No arremesso de dardo, o atleta tem três chances para lançar o dardo à maior distância que conseguir.
Você deve criar um programa para, dadas as medidas das três tentativas de lançamento, informar qual
foi a maior. 

ENTRADA:                SAIDA:
Distancias:             MAIOR DISTANCIA = 89.15 
83.21
79.53
89.15

Distancias:             MAIOR DISTANCIA = 87.20
83.21
87.20
83.21

*/

function distancias(dist01,dist02,dist03){
if(dist01 > dist02 && dist01 > dist03){
    console.log(`MAIOR = ${dist01}`)
} 
else if (dist02 > dist01 && dist02 > dist03){
    console.log(`MAIOR = ${dist02}`)
}
else{
    console.log(`MAIOR = ${dist03}`)
}
}

distancias(83.21,79.53,89.15)

