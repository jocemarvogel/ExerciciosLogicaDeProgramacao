/*
Cheio de boas ideias, agora o governo brasileiro resolveu criar a "bolsa altura". Desta forma, você foi incumbido de fazer o levantamento da altura da população de várias cidades e ordenar esta população por ordem crescente de altura. Você sabe que as cidades as quais terá que fazer isso tem menos de 3 milhões de habitantes e que ninguém, segundo o IBGE, tem mais do que 230 cm de altura nestas cidades.

Entrada
A entrada contém vários casos de teste. A primeira linha de entrada contém um inteiro NC (NC < 100) que indica a quantidade de casos de teste, ou seja de cidades. Para cada caso de teste, a primeira linha conterá um inteiro N (1 < N ≤ 3000000), indicando a quantidade de pessoas da cidade. A próxima linha irá conter a altura de cada uma destas pessoas, em centímetros, representado pela letra h (20 ≤ h  ≤ 230) e separados por um espaço em branco.

Saída
Para cada caso de teste de entrada, imprima uma linha contendo os valores das alturas de todos os moradores da cidade (em cm), por ordem crescente de altura, separados por um espaço em branco.

Obs.: O arquivo de entrada é bastante grande, portanto, utilize um método rápido para leitura / escrita.

Exemplo de Entrada:                         Exemplo de Saída
6
10
65 31 37 37 72 76 61 35 57 37               31 35 37 37 37 57 61 65 72 76
12
45 186 185 55 51 51 22 78 64 26 49 21       21 22 26 45 49 51 51 55 64 78 185 186
10
20 93 203 67 64 225 112 81 58 180           20 58 64 67 81 93 112 180 203 225
8
169 189 220 228 68 32 214 180               32 68 169 180 189 214 220 228
6
133 55 67 166 112 41                        41 55 67 112 133 166
4
39 38 120 55                                38 39 55 120
*/

var qtdTestes = Math.floor(Math.random() * 10) + 1;
var testes = [];

console.log(`Quantidade de Cidades: ${qtdTestes}`)

for(i = 0; i < qtdTestes; i++ ){
    
    var qtdPessoas = Math.floor(Math.random() * 20) + 1;
    console.log(`Numero de pessoas na Cidade: ${qtdPessoas}`)
    
    for (j = 0; j < qtdPessoas ; j++){
        var alturas = [];
        for( var m = 0; m < qtdPessoas; m++){
            var alturaPessoas = Math.floor(Math.random() * 230 - 20 + 1) + 30;
            alturas.push(alturaPessoas)
        }        
    }
    alturas.sort((a,b) => a - b)        //Função para ordenar um array numerico de forma crascente.
    console.log(alturas)
  
}



