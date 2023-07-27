/*
Uma lanchonete possui vários produtos. Cada produto possui um código
e um preço. Você deve fazer um programa para ler o código e a
quantidade comprada de um produto (suponha um código válido), e daí
informar qual o valor a ser pago, com duas casas decimais, conforme
tabela de produtos ao lado. 

Código do |  Preço do 
produto   |  produto
          |  
    1     |   R$ 5.00
    2     |   R$ 3.50
    3     |   R$ 4.80
    4     |   R$ 8.90
    5     |   R$ 7.32 

ENTRADA:
Codigo do produto comprado: 4
Quantidade comprada: 2

SAIDA:
Valor a pagar: R$ 17.80
*/

function ValorCompra(codigo,qtd){
   switch (codigo) {
    case 1:
        valor = qtd*5
        break;

    case 2:
        valor = qtd*3.5
        break;        
   
    case 3:
        valor = qtd*4.8
        break; 

    case 4:
        valor = qtd*8.9
        break;

    case 5:
        valor = qtd*7.32
        break;

    default:
        console.log(`O codigo que digitou:${codigo}, é invalido.`)
        break
    }
    console.log(`Valor a pagar: R$${valor.toFixed(2)}`)
}

ValorCompra(4,2)