/*
Leia os valores das coordenadas X e Y de um ponto no plano
cartesiano. A seguir, determine qual o quadrante ao qual pertence o
ponto (Q1, Q2, Q3 ou Q4). Se o ponto estiver na origem, escreva a
mensagem “Origem”. Se o ponto estiver sobre um dos eixos escreva
“Eixo X” ou “Eixo Y”, conforme for a situação. 
            +Y
            |
       Q2   |   Q1
            |
            |
(-)X--------0--------+
            |
            |
       Q3   |   Q4 
            |
            -
ENTRADA:                SAIDA:
Valor de X: 4.5         Q4 
Valor de Y: -2.2

*/

function buscarQuadrante(X,Y){
    if(X > 0 && Y > 0){
       var quadrante = 'Q1'
    } else if (X > 0 && Y < 0) {
        var quadrante = 'Q4'
    } else if (X < 0 && Y < 0) {
        var quadrante = 'Q3'
    } else{
        var quadrante = 'Q2'
    }

    return (console.log(quadrante));
}


buscarQuadrante(4.5,-2.2)