// funções parametrizadas
function soma(p1){     // criei uma função e passei um parametro
                        // posso passar quantos parametros eu quiser 
                        // mas devo chamr os parametrod em ordem 
    console.log(p1)   // pedi para printar esse parametro
}

soma("Yuri")   // atribui um valor a função que tem o parametro e por tanto  vai printar ele 
soma(2024)   //
soma(1010)    //  mesma coisa

//// posso passar quantos parametros eu quiser 
// mas devo chamar os parametros em ordem 
const VALOR_PADRAO=0

function soma_2(n1=VALOR_PADRAO,n2=VALOR_PADRAO){
    let result
    result=n1+n2

    return result
}

let resultado_soma=soma_2(5)
console.log(resultado_soma)

