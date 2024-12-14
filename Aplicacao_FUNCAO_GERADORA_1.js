// PILAR DA PROGRAMACAO ASSINCRONA
//FUNÇÃO GERADORA A PROPRIA FUNCAO TEM CONTROLE QUANDO ELA PRECISAR RETORNAR ALGUMA COISA
//POSSO RETORNAR COISAS AO LONGO DA EXECUÇÃO 
// 1º quando chamo a função geradora no primeiro momento ela retorna o ITERADOR
//2º quando chamo a função geradora no segundo monento ela vai retornar SEMPRE QUE TIVER UM YIELD 
//--Função Geradora -->    function* cores(parametros){blcoo de comandos}
function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
    yield 'Preto'
}

const itc=cores()   // atribui a variavel itc a funcao geradora cores()
console.log(itc.next().value)//pedi pra printar a varaivel só que p proximo item dela (next), pedi pra printar os valores (value)
console.log(itc.next().value)// toda vez que ele se deparar com uma proxima chama ele printa o proximo valor ( aqui verde)
console.log(itc.next().value)//aqui azul
console.log(itc.next().value)//aqui preto
console.log(itc.next().value) // aqui vai retornar UNDEFINED pois ja executou toda a função // se eu quiser que ela volte a percorrer o iterator
                                // devo transformar a constante itc em variavel let itc=cores()
/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////
