// FUNCAO LAMBDA ( ARROW FUNCTION)
// Tipo de declaração de função anonima
// cosnt soma=function(v1+v2){return v1+v2}  // padrao de função anonima
//const soma=(parametros)=>{corpo da função}  // ao inves de escrever função eu uso =>   dizendo que vou mandar os parametros pra dentro da função 
const soma=(v1,v2)=>{
    let res=v1+v2
    return res
}
 // criei uma função soma, com parametros v1 e v2 e pedi pra retornar v1+v2
console.log(soma(10,5))  // pedi pra printar a função soma e passei os dois parametros
const nome=n=>n     // criei uma função nome e passei que ela vai retornar n 
console.log(nome("Yuri"))      //pedi pra printar a função nome e passei o valor do parametro como string "Yuri"
////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
const normal = function(x,y){ // essa é a forma padrao de escrever uma função 
    return x+y;
}

const seta = (x,y) => x+y;  // forma com Arrow => onde dou nome pra função, passo os parametros e digo o que ela vai retornar

const dobra = x => x*2;  // exemplo de função seta 

const escreve = () => console.log(("Ola estou escrevendo"));


console.log(normal(1,2));
console.log(seta(5,5))
console.log(dobra(5));
escreve()

/////////////////////////////////////////////////
/////////////////////////////////////////////////
const executa  =(func, x, y) => func(x,y);  // criei uma função que tem como parametro uma outra função, e recebe os argumentos x, y e retorna essa função e os argumentos x,y

let valor = executa((i,j)=>i**j,2,3); // criei uma variavel chamada (valor) e passei os argumentos e parametros da função executa
console.log(valor) 

