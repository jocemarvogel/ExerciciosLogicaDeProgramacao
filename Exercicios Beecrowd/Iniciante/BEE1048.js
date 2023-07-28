/*
Uma empresa vai conceder um aumento percentual de
salário aos seus funcionários dependendo de quanto
cada pessoa ganha, conforme tabela ao lado. Fazer um
programa para ler o salário de uma pessoa, daí mostrar
qual o novo salário desta pessoa depois do aumento,
quanto foi o aumento e qual foi a porcentagem de
aumento. 

Salário atual           Aumento
Até R$ 1000.00              20%


Acima de R$ 1000.00         15%
até R$ 3000.00


Acima de R$ 3000.00         10%
até R$ 8000.00


Acima de R$ 8000.00         5%


ENTRADA:                        
Salario da pessoa: 2500.00

SAIDA:
Novo salario = R$ 2875.00
Aumento = R$ 375.00
Porcentagem = 15 %
*/

function aumento(salarioAtual){
    if (salarioAtual <= 1000){
        var aumento = 0.20;
    } else if (( salarioAtual > 1000) || (salarioAtual <= 3000)){
        var aumento = 0.15;
    }else if ((salarioAtual > 3000) || (salarioAtual <= 8000)){
        var aumento = 0.1;
    }else if (salarioAtual > 8000){
        var aumento = 0.05;
    } else {
        console.log(`${salarioAtual} é um valor não compativel`)
    }

    var novoSalario = salarioAtual * (aumento + 1);
    var aumentoSalario =novoSalario - salarioAtual; 

    console.log(`O novo salario é de ${novoSalario.toLocaleString(`pt-br`,{style: `currency`,currency:`BRL`})} reais.`)

    console.log(`O aumento foi de ${aumentoSalario.toLocaleString(`pt-br`,{style: `currency`,currency:`BRL`})} Reais.`)
    
    console.log(`A porsentagem foi de ${aumento*100}%.`)

}

aumento(210)