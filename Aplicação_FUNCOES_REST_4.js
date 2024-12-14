// parametros de funções REST
function soma(...valores){  //PARAMETRO REST criei uma função e dei um spread que vai transformar essa função em um ARRAY
    let tam=valores.length //criei uma variavel pra indicar a quantidade de parametros desse array
    let res =0 // criei uma variavel pra guardar a soma dos valores pois quero operar os valores do array
    for(let i=0;i<tam;i++){  // inicializei i com 0 , enquanto i < qnt de valores (i<tam), acrescente 1 a i
        res+=valores[i] // recebe o seu valor + valores na posição [i]    // ou seja vou somar os valores dos 
        //                                                                // parametros da função
    }
    return res // pedi pra printar a soma dos valores dos parametros da função
    // return valores.length   // pedi pra função retornar a quantidade de parametros(largura) dessa função (array)
}

console.log(soma(10,5,2,15,8))  // pedi pra printar quantos valores essa função (soma) tem ( largura)
