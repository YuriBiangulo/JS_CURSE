"use strict"

//quando decleramos uma variavel o JS leva até o
// topo de onde ela foi implementada
// quer dizer que ela pode ser usada em qualquer lugar do codigo
//let foi criado para limitar que ela só pode ser executada do scopo pra cima 
// usar let preferencialemente
// JS realiza operação de mudança de variavel de maneira automatica
// const  é uma constante que não podemos mudar 

function teste (){
    let nome="Yuri"
    if (true){
        console.log("Dentro do IF do teste: " + nome)
    }
    console.log("Dentro de teste: " + nome)
}

teste()

console.log("fora de teste: " + nome) // esse não vai imprimir pois a variavel esta em um escopo diferente 


