//CADA LOOP É UMA ITERAÇÃO  
// USAMOS QUANDO SABEMOS A QUANTIDADE DE VEZES QUE PRECISO REPETIR  (DEFINIDOS) (FOR)

//OU QUANDO NÃO SABEMSO QUANTO TEMOS QUE ITERAR (INDEFINIDOS) ( WHILE)  (DO WHILE)
// for(inicializacao;condicao;controle){}
/*
console.log("Inicio do programa")
for(let i=0; i <10; i++){ // declarei uma variavel i e atribui o valor de 0 para inicialização
                          // enquanto i < 10; que é a condição 
                          // ele incrementa i em 1 unidade
    console.log("Yuri Biangulo - valor do i: " +i); //ele iterou o loop 9x e printou o  comando na tela com o valor de i em cada iteração
                        }
console.log("Fim do programa"); // apos sair do loop printou o comadno seguinte que é esse 
*//*
const carteira = [
  { token: 'ETH', quantidade: 2, preco: 2000 },//linha 1-2: Cria um array chamado carteira que armazena as informações sobre os tokens que  o usuario possui
  { token: 'USDC', quantidade: 100, preco: 1 } // possui as propriedades : token, quantidade, preco
];

let valorTotal = 0; // cria uma variavel que começa com 0 e armazena o valor total da carteira
for (let i = 0; i < carteira.length; i++) { //inicia um loop for. A variavel 1 é inicializada com 0
                                            //o loop continua enquanto i for menor que o comprimento do array carteira, e i é incrementado em 1 a cada iteracao
  valorTotal += carteira[i].quantidade * carteira[i].preco; // acessa cada elemento do array  carteira usando o indice i.
                                                            // Calcula o valor total de cada token multiplicando a quantidade pelo preço e adiciona 
                                                            // resultado ao valor Total
}

console.log('Valor total da carteira:', valorTotal); // imprime o valor total da carteira 
*//*
const historicoTransacoes = [
    { tipo: 'compra', valor: 100 },
    { tipo: 'venda', valor: 120 },
    // ...
  ];
  
  let lucroTotal = 0;
  for (let i = 0; i < historicoTransacoes.length; i++) {
    const transacao = historicoTransacoes[i];
    if (transacao.tipo === 'venda') {
      lucroTotal += transacao.valor;
    } else {
      lucroTotal -= transacao.valor;
    }
  }
  */
 