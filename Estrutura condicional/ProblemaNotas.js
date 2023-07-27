/*
Fazer um programa para ler as duas notas que um aluno obteve no primeiro e segundo semestres de
uma disciplina anual. Em seguida, mostrar a nota final que o aluno obteve (com uma casa decimal) no
ano juntamente com um texto explicativo. Caso a nota final do aluno seja inferior a 60.00, mostrar a
mensagem "REPROVADO", conforme exemplos. 

ENTRADAS
Digite a primeira nota: 45.5
Digite a segunda nota: 31.3

SAIDAS:
NOTA FINAL = 76.8
*/

var nota1 = 45.5
var nota2 = 31.3
var media = (nota1 + nota2)/2

if (media < 60.0){
    console.log('REPROVADO!')
}
else{
    console.log('APROVADO!')
}