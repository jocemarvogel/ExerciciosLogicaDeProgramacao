/*
Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia.
O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto,
e o valor em dinheiro dado pelo cliente. Seu programa deve mostrar o valor do troco a ser devolvido
ao cliente. Se o dinheiro dado pelo cliente não for suficiente, mostrar uma mensagem informando o
valor restante conforme exemplo.

ENTRADA:
Preço unitário do produto: 8.00
Quantidade comprada: 2
Dinheiro recebido: 20.00

SAIDA:
TROCO = 4.00 
*/

function trocoVerificado(precoUm,qtd,dinheiro){
    valorTotal = precoUm * qtd;
    troco = dinheiro - valorTotal;

    if (troco < 0){
        troco = troco * (-1);
        troco = troco.toLocaleString(`pt-br`,{style: `currency`,currency:`BRL`})

        console.log(`DINHEIRO INSUFICIENTE ESTA FALTANDO ${troco} reais `)
    } else{
        console.log(`Seu troco é de ${troco.toLocaleString(`pt-br`,{style: `currency`,currency:`BRL`})} reais`)
    }
}

/* trocoVerificado( PREÇO PRODUTO , QUANTIDADE PRODUTO , DINHEIRO DADO) */
trocoVerificado(8,2,20)