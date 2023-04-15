function calculo(calculos){
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);
    var resultado = 0;
    switch(calculos){
        case '+': resultado = number1 + number2;
            document.getElementById('resultado').innerHTML = resultado
            break;
        case '-': resultado = number1 - number2;
            document.getElementById('resultado').innerHTML = resultado
            break;
        case '*': resultado = number1 * number2;
            document.getElementById('resultado').innerHTML = resultado
            break;
        case '/': resultado = number1 / number2;
            document.getElementById('resultado').innerHTML = resultado
            break;
        case '**': resultado = number1 ** number2;
            document.getElementById('resultado').innerHTML = resultado
            break;    
    }   
}