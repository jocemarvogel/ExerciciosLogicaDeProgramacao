/*
Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo
pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24
horas.

ENTRADA:                SAIDA:
Hora inicial: 16        O JOGO DUROU 10 HORA(S)
Hora final: 2
---------------------------------------------------
Hora inicial: 0         O JOGO DUROU 24 HORA(S) 
Hora final: 0
*/

function tempoJogo(horaInicial,horaFinal){
    if (horaFinal>horaInicial){
        var tempoDeJogo = horaFinal-horaInicial
    } else {
        var tempoDeJogo = (24-horaInicial)+horaFinal
    }
    
    return(console.log(`O tempo de Jogo foi de ${tempoDeJogo} Horas`))
}

tempoJogo(0,0)
