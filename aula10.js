// OPERADOR SPREAD : QUEBRA UM ARRAY 
// QUEBRA UM CONJUNTO DE ELEMENTOS E TRANSAFORMA EM ELEMENTOS
let n1=[10,20,30]
let n2=[11,22,33,44,55]
let n3=[...n1]
let n4=[n1+n2] // ele vai printar todosos elementos dentro de um unico elemento [10,20,30,11,22,33,44,55]


console.log("n1: " + n1)
console.log("n2: " + n2)
console.log("n3: " + n3)
console.log("n4: " + n4)

//caso pratico : ele absorve propriedades dos itens ... anteriores]
const jogador1={nome:"Yuri", energia:100, vidas:3, magia:150}
const jogador2={nome:"Valquiria", energia:100, vidas:3, velocidade:80}
const jogador3={...jogador1,...jogador2}  /// ele vai absorver todas as propriedades e vai manter a ultima atualização se houver uma mesma

console.log(jogador3)

/// podemos usar o spread ... para transformar itens dib do html em array e assim
//manipular eles de diferentes formas e metodos e funções
//arrays tem mais propriedades e aguentam outros tipos de dados sem ser HTML apenas
// vamos iss o utilizando o Browser e insdo em inspencionar e console


