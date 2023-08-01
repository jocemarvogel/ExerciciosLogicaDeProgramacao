/*
Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura de senha incorreta informada, escrever a mensagem "Senha Invalida". Quando a senha for informada corretamente deve ser impressa a mensagem "Acesso Permitido" e o algoritmo encerrado. Considere que a senha correta é o valor 2002. 

ENTRADA:
A entrada é composta por vários casos de testes contendo valores inteiros.

SAIDA:
Para cada valor lido mostre a mensagem correspondente à descrição do problema.
*/


var senhas = [1234,2345,3456,4567,5678,6789,7890] //Senhas testadas.

function validarSenha(senhaDigitada){

    for (var i = 0; i < senhas.length; i++)
        
        if (senhaDigitada == senhas[i]){
            console.log(`Acesso Liberado`)
            
        } else {
            console.log(`Senha Invalida!`)
            
        }
}

validarSenha(6789) //Senha digitada e comparada com senhas testadas.