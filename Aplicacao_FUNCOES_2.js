function par_impar(){ // criei uma funcao e dei um nome pra ela de par_impar
    let n1=10      // declarei as variaveis dessa funcao 
    let n2=20
    let res=n1*n2  // declarei outra variavel que vai levar o resultado de uma operação com as variaveis anteriores
    if(res%2==0)   // crie uma condicional de teste logico
        return "par"  // se true a funcao retorna isso 
    else
        return "impar" // se false a função retorna isso 
    }
    
let res=par_impar()  // falei que res vai ser o resultado da minha função 
console.log(res)  // pedi pra printar o resuldado de res que é minha função como declarado acima 

