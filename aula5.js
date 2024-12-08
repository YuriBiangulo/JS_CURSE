// == é uma comparação de igualdade
// = é uma atribuição 
// === considera a igualdade e o tipo para comparação e a posição de memoria em casos de objetos
/*
let n1=1
let n2 ="1"

let v1={nome:"Bruno"}
let v2=v1

console.log(v1===v2)
*/

// COMO SABER SE SEU PROGRAMA ESTÁ RODANDO EM UM CELULAR OU EM UM DESKTOP
if(navigator.userAgent.match(/Android/i)
||navigator.userAgent.match(/webOS/i)
||navigator.userAgent.match(/iphone|ipad|ipod/i)
||navigator.userAgent.match(/BlackBerry/i)
||navigator.userAgent.match(/Windows Phone/i)
||navigator.userAgent.match(/Opera Mini/i)
||navigator.userAgent.match(/IEMobile/i)
){
    console.log("Celular")
}
else{
    console.log("PC")
}