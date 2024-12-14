// funções são um bloco de comandos  ---> function nomex(parametros){bloco de comandos }
function calcularValorTotalPosicao(posicao) { // criei uma função e passei o parametro (posição)
    const { token, quantidade, preco } = posicao; // para o parametro posição eu atribui propriedades (token, quantidade, preço)
    const valorTotal = quantidade * preco; // criei uma constante que é produto de qtd*preco
    return valorTotal; // essa função vai retornar a constante valor total
  }
  
  const minhaPosicao = { token: 'ETH', quantidade: 2, preco: 2000 }; // criei um objeto que representa uma posição especifica com token unidades e preço
  const valor = calcularValorTotalPosicao(minhaPosicao); // minha posição é argumento da função  e armazena esse resultado em valor
  console.log('Valor total da posição:', valor); // printa o valor total da minha posição 