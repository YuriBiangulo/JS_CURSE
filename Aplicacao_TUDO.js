function calcularValorTotalEFiltrar(posicoes, limite) { //criei uma função que recebe dois parametros(posicoes, limite)
    let valorTotalEmDolar = 0;  //crei uma variavel para mostrar ovalor total em Dolar
    const posicoesComValorAlto = [];    //crei um array com valor vazio onde printarei as posições com maior valor
  
    for (let i = 0; i < posicoes.length; i++) { //criei um for inicializado em 0, que enquanto i for menor 
        //que a quantidade em largura do parametro posições, ele vai somar 1 em i 
      const posicao = posicoes[i];  // criei uma variavel posição onde ela sera a quantiade de itens em posições de indice [i]
      const { token, quantidade, precoEmUSD } = posicao;    //criei uma coleção de chaves-valor com tres itens : {token, quantidade, precoEmUSD}
      
      const valorPosicao = quantidade * precoEmUSD; // Calculando o valor total da posição em dólar
  
      valorTotalEmDolar += valorPosicao;    // Adicionando o valor da posição ao valor total
  
      if (valorPosicao > limite) {  // Verificando se o valor da posição excede o limite
        posicoesComValorAlto.push(posicao);
      }
    }
  
    console.log("Valor total das posições:", valorTotalEmDolar);    //pedi pra printar o valor total em dolares da posicao 
  
    // Utilizando switch-case para classificar as posições com valor alto
    for (const posicao of posicoesComValorAlto) {   //criei um loop de verificacao das posicoes em posicoesComValorAlto
      switch (posicao.token) {  //onde os parametros são as posições dos tokens
        case "ETH":
          console.log("Posição em ETH com valor alto:", posicao);
          break;
        case "USDT":
          console.log("Posição em USDT com valor alto:", posicao);
          break;
        default:
          console.log("Posição em outro token com valor alto:", posicao);
      }
    }
  
    return posicoesComValorAlto; //ele vai analisar case a case qual desses cases tem  o maior valor e retornar posições com valor alto
  }
  
  // uso
  const minhasPosicoes = [  //criei um arrayminhasPosições que tem um conjunto de chave-valor 
    //dentro onde recebe os valores-chaves respectivas que criei acima na linha 8 do codigo
    { token: "ETH", quantidade: 2, precoEmUSD: 2000 },
    { token: "USDT", quantidade: 1000, precoEmUSD: 1 },
    { token: "USDC", quantidade: 500, precoEmUSD: 0.99 },
    { token: "DAI", quantidade: 100, precoEmUSD: 1 },
  ];
  
  const posicoesFiltradas = calcularValorTotalEFiltrar(minhasPosicoes, 1000);   //chama a funcaocalcularValorTotalEFiltrar,
  // armazena a função minhasPosicoes dentro como parametro, e coloca o limite em 1000
  // ou seja se passar de 1000 ele vai fazer igual na linha 14 e armazenar dentro e depois entra no loop for da linha 22