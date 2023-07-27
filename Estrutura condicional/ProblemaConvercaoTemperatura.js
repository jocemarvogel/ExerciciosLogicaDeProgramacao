/*
Deseja-se converter uma medida de temperatura da escala Celsius para Fahrenheit ou vice-versa. Para
isso, você deve construir um programa que leia a letra "C" ou "F" indicando em qual escala vai ser
informada uma temperatura. Em seguida o programa deve mostrar a temperatura na outra escala com
duas casas decimais.

ENTRADA:
Temperatura em Fahrenheit: 75.00
Temperatura em Celsius: 28.15

SAIDA:
Temperatura em Celsius: 23.89 
Temperatura em Fahrenheit: 82.67

*/

function conversorTemperatura(Celcius,Faherenheit){

    f =  Celcius*1.8+32;
    c = (5/9) * (Faherenheit-32);
    console.log(`A temperatura é de ${c.toFixed(2)}° graus Celcius.`)
    console.log(`A temperatura é de ${f.toFixed(2)}° graus Faherenheit.`)
     
}
    
conversorTemperatura(28.15,75)